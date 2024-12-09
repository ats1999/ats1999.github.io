import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Kumar",
  initials: "DV",
  url: "https://ats1999.github.io",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "I'm a Software Engineer working at @AdPushup",
  summary:
    "I enjoy turning complex problems into simple, scalable and maintainable products. Experienced in architecting, designing, and implementing scalable solutions that automate the buying, and optimization of digital advertising inventory in real-time. Proficient in Kafka, Java, Spring Boot, NodeJs, and a variety of distributed and real-time technologies.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "Java Script",
    "Node.js",
    "Spring Boot",
    "ExpressJs",
    "Hibernate",
    "PostgreSQL",
    "Redis",
    "Couchbase",
    "Click-House",
    "MongoDB",
    "Kafka",
    "RabbitMQ",
    "elasticsearch",
    "Apache Spark",
    "Nginx",
    "Ansible",
    "Azure",
    "ZooKeeper",
    "WebSocket",
    "Socket.io",
    "Prometheus",
    "Grafana",
    "Maven",
    "Git",
    "Jenkins",
    "Pm2",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ats1999",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ats1999",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      lc: {
        name: "Leet Code",
        url: "https://leetcode.com/u/dsabyte/",
        icon: Icons.lc,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "AdPushup",
      href: "https://adpushup.com",
      badges: ["AdTech"],
      location: "Delhi, India",
      title: "Software Engineer",
      logoUrl: "/adpushup.png",
      start: "Jan 2022",
      end: "Present",
      description:
        "My job is to design, design and build Ad.Tech products for programmatic advertising , make changes to the existing products, conduct POCs(Proof of concepts), research about new tools and technologies. My day-to-day tasks involve writing clean, maintainable code, implementing algorithms for bid optimization, design discussions, PR reviews, integrating with third-party ad exchanges, bidders, and optimizing system performance for low latency and high throughput.",
    },
    {
      company: "Vyorius",
      badges: ["Aircraft & Drones"],
      href: "https://www.vyorius.com",
      location: "Delhi, India",
      title: "Full Stack Developer Intern",
      logoUrl: "/vyorius.png",
      start: "May 2021",
      end: "Nov 2021",
      description:
        "As a Full Stack Developer at Vyorius, I spearheaded the development of a real-time unmanned drone delivery system. My responsibilities included architecting and implementing dashboards for drone maintenance, delivery, and route planning, leveraging WebSockets and RabbitMQ for distributed load balancing and real-time data streaming.",
    },
  ],
  education: [
    {
      school: "Aryabhatta Knowledge University",
      href: "https://akubihar.ac.in",
      degree: "Computer Science & Engineering",
      logoUrl: "/aku.png",
      start: "2017",
      end: "2021",
    },
    {
      school: "Scaler Academy (Online)",
      href: "https://www.scaler.com",
      degree:
        "Data Structure & Algorithms, System Design, Sotfware Development",
      logoUrl: "/scaler.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "Stanford University (Online)",
      href: "https://www.coursera.org/account/accomplishments/verify/KHJYW7THT5UM",
      degree: "Data Structure & Algorithms",
      logoUrl: "/stanford.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "freeCodeCamp (Online)",
      href: "https://www.freecodecamp.org",
      degree: "Front End Development",
      logoUrl: "/freecodecamp.png",
      start: "2019",
      end: "2020",
    },
  ],
  // freecodecamp
  projects: [
    {
      title: "Distribted URL Shortner",
      href: "https://github.com/ats1999/URL-Shortner?tab=readme-ov-file",
      dates: "July 2023 - Aug 2023",
      active: true,
      description:
        "A high-performance service to generate unique, length-constrained short URLs for long URLs. The service utilized ZooKeeper for distributed counter management across nodes, ensuring collision prevention, high availability, and scalability. MongoDB was used for data persistence, while Redis optimized performance with caching. Built with Java and Spring Boot, the system efficiently handles large-scale requests.",
      technologies: ["Java", "Spring Boot", "ZooKeeper", "MongoDB", "Redis"],
      links: [
        {
          type: "Website",
          href: "https://github.com/ats1999/URL-Shortner",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ats1999/URL-Shortner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/usort.png",
      video: "",
    },
    {
      title: "Open Graph Image Generator",
      href: "https://ogp.dsabyte.com",
      dates: "Sept 2023 - Oct 2023",
      active: true,
      description:
        "Generate stunning Open Graph images effortlessly with our API. Pre-configured layouts ensure optimized visuals for blog posts and social media, boosting engagement and enhancing your content's appeal across platforms.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "TailwindCSS",
        "Vercel",
        "Serverless",
      ],
      links: [
        {
          type: "Website",
          href: "https://ogp.dsabyte.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/ogp.png",
      video: "",
    },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
