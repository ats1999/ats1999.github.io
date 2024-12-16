import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Kumar",
  initials: "RK",
  url: "https://ats1999.github.io",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description: "I'm a Software Engineer working at @AdPushup",
  summary: `
I enjoy turning complex problems into simple, scalable and maintainable solutions. Experienced in architecting, designing, and implementing scalable solutions that automate the buying, and optimization of digital advertising inventory in real-time. Proficient in Kafka, Java, Spring Boot, NodeJs, and a variety of distributed and real-time technologies.

I began coding in 2019 when I became interested in making a website. I still remember when I ran my first for loop in the turbo c++ console. Since then, I've been programming as a hobby. Around 3 years ago, I ramped up my learning and have been waking up at 4AM to study.
  `,
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
  latestBlogs: [
    {
      title:
        "Synchronization in Distributed Task Processing: Leveraging Distributed Locks",
      url: "https://www.dsabyte.com/blog/engineering/system-design/Synchronization-in-Distributed-Task-Processing-Leveraging-Distributed-Locks-1c43d996-0384-491a-b314-fb7705366c24",
    },
    {
      title: "Graceful Shutdown & Spring Boot",
      url: "https://www.dsabyte.com/blog/engineering/full-stack/spring-boot/Graceful-Shutdown--Spring-Boot-6d136544-f4e1-427b-b4b6-3285bfed877f",
    },
    {
      title: "Using Custom Annotation in Spring Boot",
      url: "https://www.dsabyte.com/blog/engineering/full-stack-development/back-end/spring-boot/Custom-Annotation--Spring-Boot-ab208895-83fc-4196-9049-b4f5be4ef457",
    },
    {
      title: "Learn how to make HTTP request using plan Java Socket",
      url: "https://www.dsabyte.com/blog/engineering/programming/java/Learn-how-to-make-HTTP-request-using-plan-Java-Socket-6b924558-1273-4bf6-b97e-8ba7aa3b34e3",
    },
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
        "At AdPushup, I design and develop cutting-edge AdTech solutions, optimize programmatic advertising systems, conduct POCs, and integrate with third-party ad exchanges to deliver high-performance, low-latency solutions.",
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
        "As a Full Stack Developer at Vyorius, I did the development of a real-time drone delivery system, creating dashboards for maintenance, delivery, and route planning while implementing WebSockets and RabbitMQ for real-time data streaming and distributed load balancing.",
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
      title: "Dakia: A Powerful and Flexible API Gateway",
      href: "https://github.com/ats1999/dakia",
      dates: "Sept 2024 - Present",
      active: true,
      description:
        "Dakia is a flexible API Gateway that simplifies traffic management for modern, distributed architectures. It supports dynamic configuration, zero downtime upgrades, and advanced routing, making it an ideal solution for scalable and customizable API management.",
      technologies: ["Rust", "Linux", "TCP", "HTTP", "Socket", "Networking"],
      links: [
        {
          type: "Website",
          href: "https://github.com/ats1999/dakia",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ats1999/dakia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/dakia.png",
      video: "",
    },
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
