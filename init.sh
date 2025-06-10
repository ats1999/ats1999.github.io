#!/bin/bash

set -e

# --------------------
# CONFIGURATION
# --------------------
PUBLIC_IP=$(curl -s ifconfig.me)
TZ="Asia/Kolkata"  # Change to your preferred timezone
LOG_DIR="/opt/jitsi-monitor"
INTERVAL=5         # Monitoring interval in seconds

# --------------------
# INSTALL DEPENDENCIES
# --------------------
apt update
apt install -y docker.io git curl sysstat ifstat dstat

# Upgrade Docker Compose (v2 needed for Jitsi)
DOCKER_COMPOSE_VERSION="v2.23.3"
curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" \
  -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose || true

# Start Docker
systemctl enable --now docker

# --------------------
# CLONE JITSI AND SETUP
# --------------------
git clone https://github.com/jitsi/docker-jitsi-meet.git /opt/jitsi
cd /opt/jitsi

cp env.example .env
./gen-passwords.sh

# --------------------
# CONFIGURE .ENV FOR IP-ONLY USE
# --------------------
sed -i "s|#PUBLIC_URL=.*|PUBLIC_URL=http://${PUBLIC_IP}|" .env
sed -i "s|#HTTP_PORT=8000|HTTP_PORT=80|" .env
sed -i "s|#HTTPS_PORT=8443|HTTPS_PORT=8443|" .env
sed -i "s|#TZ=UTC|TZ=${TZ}|" .env
sed -i "s|ENABLE_LETSENCRYPT=1|ENABLE_LETSENCRYPT=0|" .env

# --------------------
# CREATE CONFIG DIRS
# --------------------
mkdir -p ~/.jitsi-meet-cfg/{web,transcripts,prosody/config,prosody/prosody-plugins-custom,jicofo,jvb,jigasi,jibri}

# --------------------
# FIX COMPOSE SYNTAX FOR OLD VERSIONS (NOT NEEDED NOW, BUT SAFE)
# --------------------
sed -i 's/${JITSI_IMAGE_VERSION:-unstable}/unstable/g' docker-compose.yml

# --------------------
# START JITSI
# --------------------
docker-compose up -d

# --------------------
# START MONITORING
# --------------------
mkdir -p "$LOG_DIR"
echo "Starting system monitoring... Logs will be saved in $LOG_DIR"

nohup dstat --output "$LOG_DIR/dstat.csv" $INTERVAL > /dev/null 2>&1 &
nohup sar -o "$LOG_DIR/sar.bin" $INTERVAL > /dev/null 2>&1 &
nohup ifstat -t -i eth0 $INTERVAL >> "$LOG_DIR/network.log" 2>&1 &

# --------------------
# DONE
# --------------------
echo ""
echo "✅ Jitsi Meet is now running at: http://${PUBLIC_IP}"
echo "📊 Monitoring logs saved in: $LOG_DIR"
echo "🔧 Use 'docker ps' to check containers, and 'docker-compose logs' for debug"
