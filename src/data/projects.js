import career from "../assets/iar-career-counselling.png"
import librarymanagement from "../assets/library-management.png";
import sportsgear from "../assets/sportsgear.png";

 const projects = [
    {
      title: "UPCOMMING",
      
      stack: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
      demo: "https://sportsgear-19a96.web.app/",
      code: "https://github.com/mdismailahammedroman?tab=repositories",
      image: career,type: "fullstack"
    },
    {
      title: "UPCOMMING",
      
      stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
      demo: "https://sportsgear-19a96.web.app/",
      code: "https://github.com/mdismailahammedroman?tab=repositories",
      image: career,
      type: "fullstack"
    },
    {
      title: "BookVerse - Fontend",
      
      stack: ["React", "Tailwind css ", "Redux", "RTK query", "TypeScript"],
      demo: "https://library-management-fontend.vercel.app/",
      code: "https://github.com/mdismailahammedroman/Library-Management-System_fontend",
      image: librarymanagement,
         type: "frontend"
  
    },
    {
      title: "Library-Management-System",
      
      stack: ["MongoDB", "Nodejs", "Expressjs", "Mongoose", "TypeScript"],
      demo: "https://library-management-api-ivory.vercel.app/api/books/",
      code: "https://github.com/mdismailahammedroman/Library-Managements",
      image: librarymanagement,
   type: "Backend"
    },
    {
      title: "Sports Equipment Marketplace",
      
      stack: ["React.js", "Tailwind CSS", "DaisyUI",  "Node.js", "Express.js", "MongoDB","React Router",],
      demo: "https://sportsgear-19a96.web.app/",
      code: "https://github.com/mdismailahammedroman/SportsGear-clientSide",
      image: sportsgear,
      type:"frontend"
    },
    {
      title: "Sports Equipment Marketplace",
      
      stack: ["React.js", "Tailwind CSS", "DaisyUI",  "Node.js", "Express.js", "MongoDB","React Router",],
      demo: "https://sportsgear-19a96.web.app/",
      code: "https://github.com/mdismailahammedroman/SportsGear-ServertSide",
      image: sportsgear,
      type:"Backend"
    },
    {
      title: "IAR career counselling",
      
      stack: ["React.js", "Tailwind CSS", "DaisyUI",  "Node.js", "Express.js", "MongoDB","React Router",],
      demo: "https://iar-career-counselling.web.app/",
      code: "https://github.com/mdismailahammedroman/Career-Counseling",
      image: career,
         type: "frontend"
    },
  ];
  
  export default projects;

export const ProjectType = "frontend" | "Backend" | "fullstack";

  