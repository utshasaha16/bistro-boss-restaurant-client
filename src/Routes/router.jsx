import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "order/:category",
        element: <Order></Order>
      },
      {
        path: "logIn",
        element: <LogIn></LogIn>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      }
    ]
  },
]);


