import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Description from "../pages/Description/Description";
import RelatedProduct from "../pages/RelatedProduct/RelatedProduct";
import RelatedProducts from "../pages/RelatedProducts/RelatedProducts";
import AllProducts from "../pages/AllProducts/AllProducts";
import Blogs from "../pages/Blogs/Blogs";
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import BlogDetailes from "../pages/BlogDetailes/BlogDetailes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/product/:id",
                element:<ProductDetails></ProductDetails>,
                loader: () =>fetch('../public/products.json')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:"/product/:id",
                element:<Description></Description>,
                loader: () =>fetch('../public/products.json')
            },
            {
                path:"/product/:id",
                element: <RelatedProducts></RelatedProducts>,
                loader: () =>fetch('../public/products.json')
            },
            {
                path:'/allProducts',
                element: <AllProducts></AllProducts>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/trackOrder',
                element: <TrackOrder></TrackOrder>
            },
            {
                path:'/blog:id',
                element:<BlogDetailes></BlogDetailes>,
                loader: () =>fetch('../blogs.json')
            }
        ]
    }
])

export default router;