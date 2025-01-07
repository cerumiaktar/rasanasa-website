import { useLoaderData, useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import TopSellingProducts from "../TopSellingProducts/TopSellingProducts";
import RightSidebar from "../RightSidebar/RightSidebar";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const product = products.find(product => product.id === idInt)
    console.log(product);



    return (
        <div className="container mx-auto">
            <div className="card card-side bg-base-100 shadow-xl py-4 mb-14 flex-col md:flex-row border">
                <figure>
                    <img 
                        src={product.product_img}
                        alt="Movie" />
                </figure>
                <div className="ml-8">
                    <h2 className="card-title">{product.title}</h2>
                    <p className="font-medium text-[#0474BC] mt-8 mb-8">{product.category}</p>
                    <div className="flex items-center gap-2">
                        <p className="text-[#FF8539]"><IoIosStar /></p>
                        <p className="text-[#FF8539]"><IoIosStar /></p>
                        <p className="text-[#FF8539]"><IoIosStar /></p>
                        <p className="text-[#FF8539]"><IoIosStar /></p>
                        <p className="text-[#FF8539]"><IoStarHalfOutline /></p>
                        <span>({product.rating} rating)</span>
                    </div>
                    <p className="text-sm">Estimate Shipping Time: {product.shipping_time}</p>
                    <div className="flex flex-col md:flex-row ite md:items-center justify-between  mt-8">
                        <div>
                            <p className="text-sm">Sold by: <span className="text-lg font-medium text-[#0474BC]">Rasana</span> </p>
                        </div>
                        <div>
                            <p className="flex items-center gap-2 font-medium text-blue-600"><IoChatbubblesOutline /> Chat Now</p>
                        </div>
                    </div>
                    <h4 className="flex items-center gap-4 text-lg mt-8 mb-8"> Price: <span className="flex items-center text-3xl text-[#0474BC] font-medium"><FaBangladeshiTakaSign />{product.price}/each</span> </h4>
                
                    <div className="mt-8">
                        <button className="btn bg-[#BAD5EB] text-[#0474BC] mr-4"> <RiShoppingBag3Line /> Add to Cart</button>
                        <button className="btn bg-[#FCB840] text-white"><FiShoppingCart /> Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <TopSellingProducts></TopSellingProducts>
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default ProductDetails;