import HomeLayout from "../Layouts/HomeLayout";
import AllProducts from "../Pages/AllProducts";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router";
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        children: [
            {
                index:true,
                element: <Home/>
            },
            {
                path: '/allproducts',
                element: <AllProducts/>

            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            }

        ]

    }
])
export default router