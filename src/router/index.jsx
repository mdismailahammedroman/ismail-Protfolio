import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../page/Home";
import { About } from "../page/About";
import { Resume } from "../page/Resume";
import { Portfolio } from "../page/Portfolio";
import { Contact } from "../page/Contact";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/resume", element: <Resume /> },
        { path: "/Portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> }
    ],
  },
]);
export default router;
