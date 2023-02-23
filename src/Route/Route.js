import { createBrowserRouter } from "react-router-dom";
import AddPost from "../Addpost/AddPost";
import AllPost from "../AllPost/AllPost";
import AllPostData from "../AllPost/AllPostData";
import AllUsers from "../AllUsers/AllUsers";
import Blog from "../Blog/Blog";
import Cheap from "../Cheap/Cheap";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Dashboard/DashboardLayout";
import MyBuyItem from "../Dashboard/MyBuyItem";
import ErrorRoute from "../ErrorRoute/ErrorRoute";
import Family from "../Family/Family";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Luxurious from "../luxurious/luxurious";
import Main from "../Main/Main";
import Admin from "../PrivateRoute/Admin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/luxurious",
        element: <Luxurious></Luxurious>,
      },
      {
        path: "/cheap",
        element: <Cheap></Cheap>,
      },
      {
        path: "/family",
        element: <Family></Family>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allcars",
        element: <AllPostData></AllPostData>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MyBuyItem></MyBuyItem>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <Admin>
            <AllUsers></AllUsers>
          </Admin>
        ),
      },
      {
        path: "/dashboard/addpost",
        element: (
          <Admin>
            <AddPost></AddPost>
          </Admin>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorRoute></ErrorRoute>,
  },
]);
