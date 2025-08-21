// import logo from "./../img/profile.jpg";
import insa from "./../img/insa.png";
import techawks from "./../img/techawks.jpg";
import plastream from "./../img/playstream.png";
import ibex from "./../img/ibex.png";
import twoF from "./../img/2f.png";

export const data = {
  personalInfo: {
    name: "Natnael Gashu",
    email: "natnaelgashu2022@gmail.com",
    github: "https://github.com/NatiG100",
    linkedIn: "https://www.linkedin.com/in/natnael-gashu-b02841233/",
    whatDoYouDo: "I Build Web Application",
    aboutYouBrief: (
      <>
        <em>React </em> and <em>Node.js Developer</em> with hands-on experience
        in identifying web-based user interactions along with designing &
        implementing highly-responsive user interface components by deploying{" "}
        <em>React concepts</em>.
      </>
    ),
    about: (
      <>
        Driven by a deep passion for <em>coding</em>, I have dedicated the past
        three years to developing <em>front-end</em> applications and{" "}
        <em>back-end APIs</em> with
        <em>React, Node.js, React-Native and Flutter</em>. This journey has
        honed my expertise in full-stack design principles and technologies,
        enabling me to create <em>robust</em> and <em>user-friendly</em>{" "}
        solutions from the user interface to the underlying infrastructure.
      </>
    ),
  },
  contactSection: {
    header: "Get in Touch",
    paragraph:
      "I'm currently looking for new opportunities in React and Node.js web development",
  },
  projects: [
    {
      title: "Remytel",
      description:
        "A modern corporate website for Remytel, where I contributed as a Next.js developer, implementing responsive UI and integrating dynamic features for an enhanced user experience.",
      link: "https://www.remytel.com/",
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "RTK Query",
        "TypeScript",
      ],
    },
    {
      title: "Remytel Admin",
      description:
        "An admin dashboard for Remytel, where I developed interactive interfaces using Next.js, managed state with RTK Query, and implemented scalable components for efficient workflow management.",
      techStack: [
        "React",
        "Shadcn",
        "Next.js",
        "Tailwind CSS",
        "RTK Query",
        "TypeScript",
      ],
    },
    {
      title: "Solaris",
      description:
        "A sleek landing page for Solaris Motors, built with React and Next.js, showcasing products and features with a clean, responsive design and smooth user interactions.",
      link: "https://www.solarismotors.co/",
      techStack: [
        "React",
        "Shadcn",
        "Next.js",
        "Tailwind CSS",
        "RTK Query",
        "TypeScript",
      ],
    },
    {
      title: "Super-A",
      description:
        "A dynamic landing page for Super-A, developed with React and Next.js, featuring a responsive design, interactive elements, and a polished user experience.",
      link: "https://www.remytel.com/",
      techStack: [
        "React",
        "Shadcn",
        "Next.js",
        "Tailwind CSS",
        "RTK Query",
        "TypeScript",
      ],
    },
    {
      title: "Gratia",
      description:
        "A volunteer project where I built a website for a faith-based community, enhancing their online presence and making their resources easily accessible.",
      link: "https://gratiaethiopia.com/",
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Sanity CMS",
      ],
    },

    {
      title: "Chat App",
      description:
        "A chat application which I am building to expand my skill areas.",
      repo: "https://github.com/NatiG100/restaurant-app",
      techStack: [
        "React",
        "tailwind.css",
        "Axios",
        "Type Script",
        "React Query",
        "Node.js",
        "Nest.js",
        "Prisma",
        "PostgreSQL",
      ],
    },
    {
      title: "Restaurant Menu App",
      description:
        "This is a fully functional restaurant menu application with an easy to use admin dashboard",
      repo: "https://github.com/NatiG100/restaurant-app",
      link: "https://restaurant-c9640hulp-natig100.vercel.app",
      techStack: [
        "React",
        "tailwind.css",
        "Axios",
        "Type Script",
        "React Query",
        "Node.js",
        "Express",
        "Mongodb",
      ],
    },
    {
      title: "Portfolio webpage",
      description: "Fully responsive and very good looking portfolio site",
      repo: "https://github.com/NatiG100/portfolio",
      techStack: ["React", "Styled-component", "React-Scrole", "React-Spring"],
    },
    {
      title: "Book Sharing Website",
      description:
        "This is a web application to share books online. It include a robust search functionality and content manager.",
      repo: "https://github.com/NatiG100/book-sharing-app-front",
      link: "https://book-sharing-app-front.vercel.app",
      techStack: [
        "Next.js(app router)",
        "tailwind.css",
        "Meilisearch",
        "Strapi",
      ],
    },
    {
      title: "Hulu landing page clone",
      description:
        "Pixel perfect clone of the Hulu landing page (not responsive)",
      repo: "https://github.com/NatiG100/hulu-landing-page-clone",
      link: "https://hulu-landing-page-clone-six.vercel.app",
      techStack: ["React", "Styled component", "next.js"],
    },
    {
      title: "Youtube clone",
      description:
        "A UI clone of the most famous video sharing platform, YouTube. (Not completed)",
      repo: "https://github.com/NatiG100/youtube-clone",
      link: "https://youtube-clone-delta-smoky.vercel.app",
      techStack: ["Next.js", "MaterialUI"],
    },
    // {
    //   title: "Landing page",
    //   description:
    //     "A fully responsive sample landing page with a very attractive UI.",
    //   repo: "https://github.com/NatiG100/react-website-smooth-scroll",
    //   link: "https://react-website-smooth-scroll-beta.vercel.app",
    //   techStack: ["React", "Styled-component", "React-Scrole"],
    // },
    // {
    //   title: "Rick and Morty",
    //   description:
    //     "This is a test project which helped me to get my first job as a web developer.",
    //   repo: "https://github.com/NatiG100/rick-and-morty",
    //   link: "https://rick-and-morty-28i917p9k-natig100.vercel.app",
    //   techStack: ["Next.js", "Styled-component", "GrapQL"],
    // },
  ],
  experience: [
    {
      company: "Playstream",
      jobTitle: "Full Stack Developer",
      date: "May 2024 - Present",
      logo: plastream,
      description: `Design and build scalable web applications using modern technologies like React, 
Flutter, and Node.js. Create responsive interfaces, manage databases, integrate APIs, 
and automate workflows with CI/CD pipelines. Utilize Git for collaboration, manage 
cloud infrastructure, and develop RESTful APIs while mentoring junior 
developers to foster growth.`,
    },
    {
      company: "Ibex",
      jobTitle: "Full Stack Developer",
      date: "April 2024 - May 2024",
      logo: ibex,
      description: `Design and architect high-quality software, prioritize development tasks, and write 
clean, maintainable code. Use automation for repetitive tasks and conduct thorough 
testing to ensure functionality and performance. Collaborate with cross-functional 
teams, document development phases clearly, monitor system stability, and keep the 
software updated with the latest technologies and trends.`,
    },
    {
      company: "INSA",
      jobTitle: "System Developer",
      date: "August 2022 - April 2024",
      logo: insa,
      description: `Follow Microservice Architecture to build highly reusable, high-performance web and 
mobile applications. Create and test applications for websites while collaborating with 
graphic designers and other creatives.`,
    },
    {
      company: "2F CAPITAL",
      jobTitle: "Frontend Developer",
      date: "April 2022 - August 2022",
      logo: twoF,
      description: `Responsible for developing and implementing user-facing features using 
        React.js, ensuring designs and wireframes are accurately translated into high-quality, 
        maintainable code. Tasked with integrating front-end components with REST API services 
        to deliver seamless and responsive web applications.`,
    },
    {
      company: "TECHAWKS",
      jobTitle: "React Developer",
      date: "January 2022 - April 2022",
      logo: techawks,
      description: `Responsible for building and implementing user-facing features 
      using Next.js, transforming designs and wireframes into high-quality, 
      efficient code. Tasked with integrating front-end components with GraphQL 
      API services to ensure seamless and dynamic application performance.`,
    },
  ],
  skills: [
    {
      id: 1,
      title: "React.js",
      level: 5,
      icon: "/logos/react.svg",
    },
    {
      id: 2,
      title: "Next.js",
      level: 5,
      icon: "/logos/nextjs.svg",
    },
    {
      id: 3,
      title: "Node.js",
      level: 5,
      icon: "/logos/node.svg",
    },
    {
      id: 13,
      title: "Bootstrap",
      level: 5,
      icon: "/logos/bootstrap.svg",
    },
    {
      id: 14,
      title: "Tailwind",
      level: 5,
      icon: "/logos/tailwind.svg",
    },
    {
      id: 15,
      title: "Redux",
      level: 5,
      icon: "/logos/redux.svg",
    },
    {
      id: 16,
      title: "Docker",
      level: 5,
      icon: "/logos/docker.svg",
    },

    {
      id: 4,
      title: "Express.js",
      level: 5,
      icon: "/logos/express.svg",
    },
    {
      id: 5,
      title: "Nest.js",
      level: 5,
      icon: "/logos/nestjs.svg",
    },
    {
      id: 6,
      title: "React Native",
      level: 5,
      icon: "/logos/react.svg",
    },
    {
      id: 7,
      title: "Flutter",
      level: 5,
      icon: "/logos/flutter.svg",
    },

    {
      id: 8,
      title: "GraphQL",
      level: 5,
      icon: "/logos/graphql.svg",
    },
    {
      id: 9,
      title: "Prisma.js",
      level: 5,
      icon: "/logos/prisma.svg",
    },
    {
      id: 10,
      title: "Mongodb.js",
      level: 5,
      icon: "/logos/mongodb.svg",
    },
    {
      id: 12,
      title: "MySQL.js",
      level: 5,
      icon: "/logos/mysql.svg",
    },
  ],
};
