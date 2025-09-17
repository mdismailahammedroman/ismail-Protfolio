import career from "../assets/creere.jpg"
import librarymanagement from "../assets/library-management.png";
import sportsgear from "../assets/sportsgear.png";

 const projects = [
    {
      title: "UPCOMMING",
      
      stack: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
      demo: "https://sportsgear-19a96.web.app/",
      code: "https://github.com/ismailahammed1?tab=repositories",
      image: career,type: "fullstack"
    },
    {
      title: "UPCOMMING",
      
      stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
      demo: "https://sportsgear-19a96.web.app/",
      code: "https://github.com/ismailahammed1?tab=repositories",
      image: career,
      type: "fullstack"
    },
    {
      title: "BookVerse - Fontend",
      
      stack: ["React", "Tailwind css ", "Redux", "RTK query", "TypeScript"],
      demo: "https://library-management-fontend.vercel.app/",
      code: "https://github.com/ismailahammed1/Library-Management-System_fontend",
      image: librarymanagement,
         type: "frontend"
  
    },
    {
      title: "BookVerse - Backend",
      
      stack: ["MongoDB", "Nodejs", "Expressjs", "Mongoose", "TypeScript"],
      demo: "https://library-management-api-ivory.vercel.app/api/books/",
      code: "https://github.com/ismailahammed1/Library-Managements",
      image: librarymanagement,
   type: "backend"
    },
    {
      title: "Sports Equipment Marketplace",
      
      stack: ["React.js", "Tailwind CSS", "DaisyUI",  "Node.js", "Express.js", "MongoDB","React Router",],
      demo: "https://sportsgear-19a96.web.app/",
      code: "https://github.com/ismailahammed1/SportsGear-clientSide",
      image: sportsgear,
      type:"frontend"
    },
    {
      title: "IAR career counselling",
      
      stack: ["React.js", "Tailwind CSS", "DaisyUI",  "Node.js", "Express.js", "MongoDB","React Router",],
      demo: "https://sportsgear-19a96.web.app/",
      code: "https://github.com/ismailahammed1?tab=repositories",
      image: career,
         type: "frontend"
    },
  ];
  
  export default projects;

export const ProjectType = "frontend" | "backend" | "fullstack";

  