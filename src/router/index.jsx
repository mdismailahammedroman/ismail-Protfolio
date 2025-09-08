import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../page/Home";
import { About } from "../page/About";
import { Resume } from "../page/Resume";

const router = createBrowserRouter([
  {
    Component: App,
    path: "",
    children: [
        { path: "", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/resume", element: <Resume /> }
    ],
  },
]);
export default router;
