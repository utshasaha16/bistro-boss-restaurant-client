import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/shared/Secret/Secret";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Dashboard from "../Layout/Dashboard";

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
      },
      {
        path: "secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: "deshboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },

      // admin only routes
      {
        path: "addItem",
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: "manageItem",
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path: "updateItem/:id",
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: "allUser",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }

    ]
  }
]);


