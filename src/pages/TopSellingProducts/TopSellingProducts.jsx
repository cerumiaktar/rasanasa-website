import { useEffect, useState } from "react";
import TopSellingProduct from "../TopSellingProduct/TopSellingProduct";

const TopSellingProducts = () => {
    const [topSellingProducts, setTopSellingProduct] = useState([]);

    useEffect(() => {
        fetch('/top.json')
            .then(res => res.json())
            .then(data => setTopSellingProduct(data))
    }, [])
    return (
        <div className="bg-white shadow-lg border">
            <h1 className="text-xl font-medium border-b pl-4 py-4 mb-4">Top Selling Products</h1>
            <div className="px-4">
                {
                    topSellingProducts.map(topsellingproduct => <TopSellingProduct topsellingproduct = {topsellingproduct} ></TopSellingProduct>)
                }
            </div>

        </div>
    );
};

export default TopSellingProducts;