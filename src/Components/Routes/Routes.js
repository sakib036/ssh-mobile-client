import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddAProduct from "../Pages/Dashboard/AddAProduct/AddAProduct";
import AllSeller from "../Pages/Dashboard/All User/AllSeller/AllSeller";
import AllUser from "../Pages/Dashboard/All User/AllUser";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ReportedProduct from "../Pages/Dashboard/ReportedProduct/ReportedProduct";

import Home from "../Pages/Home/Home/Home";
import AllChategoryPhone from "../Pages/Home/PhoneCategory/AllCategoryPhone/AllChategoryPhone";
import PhoneDetails from "../Pages/Home/PhoneCategory/PhoneDetails/PhoneDetails";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import NotFound from "../Pages/NotFound/NotFound";


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
                element: <AllChategoryPhone></AllChategoryPhone>,
                loader:({params})=>fetch(`https://ssh-mobile-server.vercel.app/mobiles/${params.brand}`),
            },
            {
                path:'/mobiles/:brand/:id',
                element: <PhoneDetails></PhoneDetails>,
                loader:({params})=>fetch(`https://ssh-mobile-server.vercel.app/mobiles/${params.brand}/${params.id}`),
            },
            {
                path:'/*',
                element: <NotFound></NotFound>
                
            },
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard/myOrder',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/dashboard/users',
                element:<AllUser></AllUser>
            },
            {
                path:'/dashboard/seller',
                element:<AllSeller></AllSeller>
            },
            {
                path:'/dashboard/addProduct',
                element:<AddAProduct></AddAProduct>
            },
            {
                path:'/dashboard/myProduct',
                element:<MyProduct></MyProduct>
            },
            {
                path:'/dashboard/report',
                element:<ReportedProduct></ReportedProduct>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`https://ssh-mobile-server.vercel.app/bookings/${params.id}`)
            },
            {
                path:'/dashboard/*',
                element: <NotFound></NotFound>
                
            },
            

        ]
    }
])

export default routes;