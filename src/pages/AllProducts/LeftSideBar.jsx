
const LeftSideBar = () => {
    return (
        <div className="hidden sm:block md:w-4/12 space-y-6">
            {/* <div className="navbar">
                <div className="flex-none">
                    <ul className="menu  px-1">
                        <li>
                            <details>
                                <summary className="text-lg">Category</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a></a></li>
                                    <li><a>Foreign Products</a></li>
                                    <li><a>Electronic Gadgets</a></li>
                                    <li><a>Men's Fashion</a></li>
                                    <li><a>Women's Fashion</a></li>
                                    <li><a>Bag, Jewellery & Accessories</a></li>
                                    <li><a>Vehicle Essentials</a></li>
                                    <li><a>Furniture</a></li>
                                    <li><a>Books & Stationery</a></li>
                                    <li><a>Food & Grocery</a></li>
                                    <li><a>Kids Zone</a></li>
                                    <li><a>Shoes</a></li>
                                    <li><a>Sports Zone</a></li>
                                    <li><a>Electrical & Machinery</a></li>
                                    <li><a>Digital Products</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="bg-white shadow-lg border px-4 py-6 ">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Category</option>
                    <option>Home Appliance & Lifestyle</option>
                    <option>Foreign Products</option>
                    <option>Electronic Gadgets</option>
                    <option>Men's Fashion</option>
                    <option>Women's Fashion</option>
                    <option>Bag, Jewellery & Accessories</option>
                    <option>Vehicle Essentials</option>
                    <option>Furniture</option>
                    <option>Books & Stationery</option>
                    <option>Food & Grocery</option>
                    <option>Kids Zone</option>
                    <option>Shoes</option>
                    <option>Sports Zone</option>
                    <option>Electrical & Machinery</option>
                    <option>Digital Products</option>
                </select>
            </div>
            <div className="bg-white shadow-lg border px-4 py-4">
                <h1 className="text-base font-medium mb-2">Price Range</h1>
                <input type="range" min={0} max="100" value="40" className="range" />
            </div>
            <div className="bg-white shadow-lg border px-4 py-6">
                <select className="select select-bordered w-full join-item">
                    <option disabled selected>Filter by Brand name</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>
            </div>
            <div className="bg-white shadow-lg border px-4 py-6">
                <select className="select select-bordered w-full join-item">
                    <option disabled selected>Filter by Size</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>
            </div>
            <div className="bg-white shadow-lg border px-4 py-6">
                <select className="select select-bordered w-full join-item">
                    <option disabled selected>Filter by Fabric</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>
            </div>
            <div className="bg-white shadow-lg border px-4 py-6">
                <select className="select select-bordered w-full join-item">
                    <option disabled selected>Filter by Pant Size</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>
            </div>
        </div>
    );
};

export default LeftSideBar;