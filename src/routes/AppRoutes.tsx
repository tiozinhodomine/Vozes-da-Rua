import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { FormPage } from "../pages/FormPage/FormPage";
import About from "../pages/About/about";
import Home from "../pages/Home/home";
import Organizations from "../pages/Organizations/organizations";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/App", element: <App /> },
      { path: "/About", element: <About /> },
      { path: "/Home", element: <Home /> },
      { path: "/Organization", element: <Organizations /> },
      { path: "/Form", element: <FormPage /> },
    ],
  },
]);