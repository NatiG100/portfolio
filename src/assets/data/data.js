import logo from './../img/profile.jpg';
import insa from './../img/insa.png';
import techawks from './../img/techawks.jpg';
import twoF from './../img/2f.png';

export const data = {
    personalInfo:{
        name: "Natnael Gashu",
        email:"natnaelgashu2022@gmail.com",
        github:"https://github.com/NatiG100",
        linkedIn:"https://www.linkedin.com/in/natnael-gashu-b02841233/",
        whatDoYouDo:"I Build Web Application",
        aboutYouBrief:
            <>
                    <em>React </em> and <em>Node.js Developer</em> with hands-on experience in identifying web-based 
                    user interactions along with designing & implementing highly-responsive 
                    user interface components by deploying <em>React concepts</em>.
            </>,
        about:
            <>
                Hello! My name is Natnael and I enjoy building web
                 applications. I am <em>React </em> and <em>Node.js Developer</em> with hands-on 
                 experience in identifying web-based user interactions 
                 alongwith designing & implementing <em>highly responsive</em> user 
                 interface components by deploying React concepts. <br/><br/>
                Proficient in translating designs & wireframes into high-quality code,
                 and writing application interface code via <em>Javascript and 
                 ReactJS workflows</em>. Adept at monitoring & maintaining 
                 frontend performance and troubleshooting & debugging 
                 the same to bolster overall performance.
            </>,
        
    },
    contactSection:{
        header: "Get in Touch",
        paragraph: "I'm currently looking for new opportunities in React and Node.js web development",
    },
    projects:[
        {
           title:"Restaurant Menu App",
           description:"This is a fully functional restaurant menu application with an easy to use admin dashboard",
           repo:"https://github.com/NatiG100/restaurant-app",
           link:"https://restaurant-c9640hulp-natig100.vercel.app",
            techStack:["React", "tailwind.css", "Axios","Type Script","React Query","Node.js","Express","Mongodb"]
        },
        {
            title:"Portfolio webpage",
            description:"Fully responsive and very good looking portfolio site",
            repo:"https://github.com/NatiG100/portfolio",
             techStack:["React", "Styled-component", "React-Scrole", "React-Spring"]
         },
        {
            title:"Book Sharing Website",
            description:"This is a web application to share books online. It include a robust search functionality and content manager.",
            repo:"https://github.com/NatiG100/book-sharing-app-front",
            link:"https://book-sharing-app-front.vercel.app",
             techStack:["Next.js(app router)", "tailwind.css", "Meilisearch","Strapi"]
         },
         {
            title:"Hulu landing page clone",
            description:"Pixel perfect clone of the Hulu landing page (not responsive)",
            repo:"https://github.com/NatiG100/hulu-landing-page-clone",
            link:"https://hulu-landing-page-clone-six.vercel.app",
             techStack:["React", "Styled component", "next.js"]
         },
         {
            title:"Youtube clone",
            description:"A UI clone of the most famous video sharing platform, YouTube. (Not completed)",
            repo:"https://github.com/NatiG100/youtube-clone",
            link:"https://youtube-clone-delta-smoky.vercel.app",
            techStack:["Next.js", "MaterialUI"]
         },
         {
            title:"Landing page",
            description:"A fully responsive sample landing page with a very attractive UI.",
            repo:"https://github.com/NatiG100/react-website-smooth-scroll",
            link:"https://react-website-smooth-scroll-beta.vercel.app",
            techStack:["React", "Styled-component", "React-Scrole"],
         },
         {
            title:"Rick and Morty",
            description:"This is a test project which helped me to get my first job as a web developer.",
            repo:"https://github.com/NatiG100/rick-and-morty",
            link:"https://rick-and-morty-28i917p9k-natig100.vercel.app",
             techStack:["Next.js", "Styled-component", "GrapQL"]
         },
    ],
    experience:[
        {
            company: "INSA",
            jobTitle: "System Developer",
            date: "July - December 2015",
            logo:insa,
            responsibilities:[
                {
                    id:1,
                    paragraph:"Follow Microservice Architecture in order to implement highly reusable and high performance web and mobile applications."
                },
                {
                    id:2,
                    paragraph:"Creating and testing applications for websites."
                },
                {
                    id:3,
                    paragraph:"Working with graphics and other designers."
                },
            ]
        },
        {
            company: "2F CAPITAL",
            jobTitle: "Frontend Developer",
            date: "July - December 2015",
            logo:twoF,
            responsibilities:[
                {
                    id:1,
                    paragraph:"Developing new user-facing features using React.js."
                },
                {
                    id:2,
                    paragraph:"Translating designs and wireframes into high quality code."
                },
                {
                    id:3,
                    paragraph:"Integrate front end with REST api services."
                },
            ]
        },
        {
            company: "TECHAWKS",
            jobTitle: "React Developer",
            date: "July - December 2015",
            logo:techawks,
            responsibilities:[
                {
                    id:1,
                    paragraph:"Developing new user-facing features using Next.js."
                },
                {
                    id:2,
                    paragraph:"Translating designs and wireframes into high quality code."
                },
                {
                    id:3,
                    paragraph:"Integrate front end with GraphQL api services."
                },
            ]
        },
    ],
    skills:[
        {
            id:1,
            title: "React.js",
            level: 5
        },
        {
            id:2,
            title: "Redux",
            level: 5,
        },
        {
            id:3,
            title: "Axios",
            level: 5,
        },
        {
            id:4,
            title: "Apollo Client",
            level: 5
        },
        {
            id: 5,
            title: "Strapi CMS",
            level: 4,
        },
        {
            id: 6,
            title: "Node.js",
            level: 4,
        },
        {
            id: 7,
            title: "Express.js",
            level: 4,
        },
        {
            id: 8,
            title: "Nest.js",
            level: 4,
        },
        {
            id: 9,
            title: "Prisma.js",
            level: 3,
        },
        {
            id: 10,
            title: "GraphQL",
            level: 4,
        },
        {
            id: 11,
            title: "MongoDb",
            level: 4,
        },
        {
            id: 12,
            title: "MySQL",
            level: 4,
        },
        {
            id: 13,
            title: "Postgresql",
            level: 3,
        }
    ]
}