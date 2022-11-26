import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";

import Home from "../Pages/Home/Home/Home";
import AllChategoryPhone from "../Pages/Home/PhoneCategory/AllCategoryPhone/AllChategoryPhone";
import PhoneDetails from "../Pages/Home/PhoneCategory/PhoneDetails/PhoneDetails";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/mobiles/:brand',
                element: <PrivateRoutes><AllChategoryPhone></AllChategoryPhone></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/mobiles/${params.brand}`),
            },
            {
                path:'/mobiles/:brand/:id',
                element: <PrivateRoutes><PhoneDetails></PhoneDetails></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/mobiles/${params.brand}/${params.id}`),
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrder></MyOrder> 
            }


        ]
    }
])

export default routes;