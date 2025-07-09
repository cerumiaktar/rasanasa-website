import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { id, product_img, title, price, review } = product;
    return (
        <div>
            <Link to={`/product/${id}`}>
                <div>
                    <div className="card bg-base-100 shadow-xl py-8 border h-[35npm 0px]">
                        <figure>
                            <img className="w-44 h-44"
                                src={product_img}
                                alt="product" />
                        </figure>
                        <div className="px-6 mt-4">
                            <h2 className="card-title">
                                {title}</h2>
                            <p className="flex items-center text-xl text-[#0474BC] font-medium mt-2 mb-2"> <span><FaBangladeshiTakaSign /></span> {price}</p>
                            <p className="text-xl text-[#FF8539]">{review}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;