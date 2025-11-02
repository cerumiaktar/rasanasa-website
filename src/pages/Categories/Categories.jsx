import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data =>setCategories(data))
    } ,[])
    return (
        <div className="container mx-auto mb-14">
            <div className="text-center mt-8 mb-8">
                <h1 className="text-3xl font-medium dark:text-black">Categories</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
                {
                    categories.map((category, idx) => <Category key={idx} category = {category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;