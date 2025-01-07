import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-[#0474BC] ">
            <div className="navbar container mx-auto">
                <div className="flex-1 w-4/12">
                    <img src="https://i.ibb.co.com/1KRv8pD/logo.png" alt="" />
                </div>
                <div className="w-6/12 relative">
                    <input className="w-full p-2 rounded" type="text" placeholder="Search"/>
                    <p className="bg-[#FCB840] px-4 py-2 absolute inset-y-0 right-0 text-2xl rounded-r text-white"><IoSearch /></p>
                </div>
                <div className="flex-none gap-6 w-4/12 navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <p className="text-2xl text-white"><RiShoppingBag3Line /></p>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                            <p className="text-base text-white">Cart</p>
                        </div>

                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn bg-[#0474BC] btn-block text-white">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <p className="text-2xl text-white"><FaRegUserCircle /></p>
                        <Link to='/login'><p className="text-base text-white">Account</p></Link>
                    </button>
                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;