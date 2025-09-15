import { FaBangladeshiTakaSign } from "react-icons/fa6";

const AllProduct = ({ allProduct }) => {
    const {product_img, title,review,price } = allProduct;
    return (
        <div>
            <div className="card bg-base-100 dark:bg-white shadow-xl h-[350px] py-8 border">
                <figure>
                    <img className="w-44 h-44"
                        src={product_img}
                        alt="product" />
                </figure>
                <div className="px-6 mt-4">
                    <h2 className="card-title dark:text-black">
                        {title}</h2>
                    <p className="flex items-center text-xl text-[#0474BC] font-medium mt-2 mb-2"> <span><FaBangladeshiTakaSign /></span> {price}</p>
                    <p className="text-xl text-[#FF8539]">{review}</p>
                </div>
            </div>

        </div>
    );
};

export default AllProduct;