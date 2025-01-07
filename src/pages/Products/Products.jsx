import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mt-8 mb-8">
                <h1 className="text-3xl font-medium">Products</h1>
                <p className="text-xl">See All</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    products.map((product, idx) => <Product key={idx} product={product}></Product>)
                }
            </div>
            <div className="text-center">
                <button className="mt-8 mb-8 font-medium border px-4 py-2 btn-outline border-[#0474BC] text-[#0474BC] rounded">Load More</button>
            </div>
        </div>
    );
};

export default Products;