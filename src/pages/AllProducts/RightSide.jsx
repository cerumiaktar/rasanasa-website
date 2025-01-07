import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import AllProduct from "./AllProduct";

const RightSide = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg font-medium">All Products</h1>
                <div className="text-center">
                    <details className="dropdown">
                        <summary className="btn m-1 border border-[#0474BC] text-[#0474BC]">Short By <IoIosArrowDown /> </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Rating</a></li>
                            <li><a>Number of pages</a></li>
                            <li><a>Publisher year</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-10">
                {
                    allProducts.map(allproduct => <AllProduct allProduct={allproduct}></AllProduct>)
                }
            </div>
            <div className="text-center mt-10">
                <div className="join">
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="1"
                        defaultChecked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </div>
        </div>
    );
};

export default RightSide;