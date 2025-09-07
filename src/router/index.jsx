import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../page/Home";
import { About } from "../page/About";

const router = createBrowserRouter([
  {
    Component: App,
    path: "",
    children: [
        { path: "", element: <Home /> },
        { path: "/about", element: <About /> }
    ],
  },
]);
export default router;
