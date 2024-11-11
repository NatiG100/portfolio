import logo from "./../img/profile.jpg";
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
      title: "Tibeb inprint",
      description: "A website which I contributed as a fullstack developer",
      link: "https://www.http://tibebinprint.com/",
      techStack: [
        "AWS",
        "React",
        "tailwind.css",
        "Apollo Client",
        "Type Script",
        "GraphQl",
        "Node.js",
        "Nest.js",
        "Prisma",
        "PostgreSQL",
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
    {
      title: "Landing page",
      description:
        "A fully responsive sample landing page with a very attractive UI.",
      repo: "https://github.com/NatiG100/react-website-smooth-scroll",
      link: "https://react-website-smooth-scroll-beta.vercel.app",
      techStack: ["React", "Styled-component", "React-Scrole"],
    },
    {
      title: "Rick and Morty",
      description:
        "This is a test project which helped me to get my first job as a web developer.",
      repo: "https://github.com/NatiG100/rick-and-morty",
      link: "https://rick-and-morty-28i917p9k-natig100.vercel.app",
      techStack: ["Next.js", "Styled-component", "GrapQL"],
    },
  ],
  experience: [
    {
      company: "Playstream",
      jobTitle: "Full Stack Developer",
      date: "May 2024 - Present",
      logo: plastream,
      responsibilities: [
        {
          id: 1,
          paragraph:
            "Design, build, and maintain efficient code using modern web technologies.",
        },
        {
          id: 2,
          paragraph:
            "Create responsive user interfaces with frameworks like React and Flutter.",
        },
        {
          id: 3,
          paragraph:
            "Develop server-side logic and manage databases using Node.js.",
        },
        {
          id: 4,
          paragraph:
            "Integrate APIs for seamless communication between services.",
        },
        {
          id: 5,
          paragraph:
            "Utilize version control systems like Git for collaboration and project management.",
        },
        {
          id: 6,
          paragraph:
            "Set up CI/CD pipelines to automate build, test, and deployment processes.",
        },
        {
          id: 7,
          paragraph:
            "Manage cloud infrastructure to ensure scalable and reliable applications.",
        },
        {
          id: 8,
          paragraph:
            "Develop RESTful APIs and GraphQL endpoints for data communication.",
        },
        {
          id: 9,
          paragraph:
            "Mentor junior developers to foster team growth and skill development.",
        },
      ],
    },
    {
      company: "Ibex",
      jobTitle: "Full Stack Developer",
      date: "April 2024 - May 2024",
      logo: ibex,
      responsibilities: [
        {
          id: 1,
          paragraph: "Develop high-quality software design and architecture.",
        },
        {
          id: 2,
          paragraph: "Prioritize and execute development tasks efficiently.",
        },
        {
          id: 3,
          paragraph: "Produce clean, efficient, and maintainable code.",
        },
        {
          id: 4,
          paragraph:
            "Automate repetitive tasks using appropriate tools and scripting.",
        },
        {
          id: 5,
          paragraph:
            "Review and debug code to ensure accuracy and performance.",
        },
        {
          id: 6,
          paragraph:
            "Perform validation testing to guarantee functionality and quality.",
        },
        {
          id: 7,
          paragraph:
            "Collaborate with cross-functional teams to fix issues and enhance software.",
        },
        {
          id: 8,
          paragraph: "Document the phases of software development clearly.",
        },
        {
          id: 9,
          paragraph: "Monitor system performance and stability regularly.",
        },
        {
          id: 10,
          paragraph:
            "Ensure the software remains current with the latest technologies and trends.",
        },
      ],
    },
    {
      company: "INSA",
      jobTitle: "System Developer",
      date: "August 2022 - April 2024",
      logo: insa,
      responsibilities: [
        {
          id: 1,
          paragraph:
            "Follow Microservice Architecture in order to implement highly reusable and high performance web and mobile applications.",
        },
        {
          id: 2,
          paragraph: "Creating and testing applications for websites.",
        },
        {
          id: 3,
          paragraph: "Working with graphics and other designers.",
        },
      ],
    },
    {
      company: "2F CAPITAL",
      jobTitle: "Frontend Developer",
      date: "April 2022 - August 2022",
      logo: twoF,
      responsibilities: [
        {
          id: 1,
          paragraph: "Developing new user-facing features using React.js.",
        },
        {
          id: 2,
          paragraph:
            "Translating designs and wireframes into high quality code.",
        },
        {
          id: 3,
          paragraph: "Integrate front end with REST api services.",
        },
      ],
    },
    {
      company: "TECHAWKS",
      jobTitle: "React Developer",
      date: "January 2022 - April 2022",
      logo: techawks,
      responsibilities: [
        {
          id: 1,
          paragraph: "Developing new user-facing features using Next.js.",
        },
        {
          id: 2,
          paragraph:
            "Translating designs and wireframes into high quality code.",
        },
        {
          id: 3,
          paragraph: "Integrate front end with GraphQL api services.",
        },
      ],
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
