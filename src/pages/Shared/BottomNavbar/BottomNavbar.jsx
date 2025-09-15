import { NavLink } from "react-router-dom";


const BottomNavbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/allProducts'>All Products</NavLink> </li>
        <li><NavLink to='/blogs'>Blogs</NavLink> </li>
        <li><NavLink to='/trackOrder'>Track Order</NavLink> </li>
    </>
    return (
        <div className=" bg-white dark:bg-white shadow-lg">
            <div className="navbar bg-base-100 container mx-auto">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg">
                            {links}
                        </ul>
                    </div>
                    <select className="select bg-[#0474BC] w-full max-w-lg text-white text-lg">
                        <option disabled selected>Categories</option>
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
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BottomNavbar;