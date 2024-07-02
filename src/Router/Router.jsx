import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PriveatRoute from "./PriveatRoute";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/checkout/:_id',
                loader : ({params})=> fetch(`http://localhost:5000/service/${params._id}`),
                element: <PriveatRoute><Checkout/></PriveatRoute>
            },
            {
                path: '/bookings',
                element: <PriveatRoute><Bookings/></PriveatRoute>
            }
        ]
    }
]);

export default Router;