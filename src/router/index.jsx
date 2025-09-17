import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../page/Home";
import { About } from "../page/About";
import { Resume } from "../page/Resume";
import { Portfolio } from "../page/Portfolio";
import { Contact } from "../page/Contact";
import ProjectLayout from "../layout/ProjectLayout";
import BackendProjects from "../page/BackendProjects";
import FrontendProjects from "../page/FrontendProjects";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
        {index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/resume", element: <Resume /> },
        { path: "/portfolio", Component: ProjectLayout,
          children:[
            {path: "all", element: <Portfolio />},
            {path: "frontend", element: <FrontendProjects />},
            {path: "backend", element: <BackendProjects />},
          ]
         },
        { path: "/contact", element: <Contact /> }
    ],
  },
]);
export default router;
