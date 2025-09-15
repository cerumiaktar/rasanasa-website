import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-base-200 dark:bg-[#F2F2F2]">
            <footer className="footer text-base-content p-10 container mx-auto">
                <aside>
                    <img src="https://i.ibb.co.com/30KnQxX/rasanasa-logo.png" alt="" />
                    <form>
                        <fieldset className="form-control w-80">
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item dark:bg-white" />
                                <button className="btn bg-[#0474BC] join-item text-white dark:border-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                    <p className="dark: text-[#333333]">
                        Rasanasa is a premier online platform offering a vast <br /> selection of clothing, electronics, home appliances, <br /> and electric products for sale. Shop with confidence <br /> at Rasanasa for a seamless online shopping experience.
                    </p>
                    <img className="w-40 mt-4" src="https://i.ibb.co.com/rsLrcz6/play.png" alt="" />
                </aside>
                <nav>
                    <h6 className="footer-title border-b-2 border-[#333333] pb-2 dark:text-black">Additional Information</h6>
                    <a className="link link-hover dark: text-[#333333]">Terms & Conditions</a>
                    <a className="link link-hover dark:text-[#333333]">Return Policy</a>
                    <a className="link link-hover dark:text-[#333333]">Support Policy</a>
                    <a className="link link-hover dark:text-[#333333]">Privacy Policy</a>
                    <a className="link link-hover dark:text-[#333333]">Delete Account</a>
                    <a className="link link-hover dark:text-[#333333]">Licence : 009750/2024</a>
                </nav>
                <nav>
                    <h6 className="footer-title border-b-2 border-[#333333] pb-2 dark:text-black">My Account</h6>
                    <a className="link link-hover dark:text-[#333333]">About us</a>
                    <a className="link link-hover dark:text-[#333333]">Login</a>
                    <a className="link link-hover dark:text-[#333333]">Order History</a>
                    <a className="link link-hover dark:text-[#333333]">My Wishlist</a>
                    <a className="link link-hover dark:text-[#333333]">Track Order</a>
                    <button className="btn bg-[#0474BC] text-white dark:border-none">Seller</button>
                </nav>
                <nav>
                    <h6 className="footer-title border-b-2 border-[#333333] pb-2 dark:text-black">Contact Info</h6>
                    <a className="link link-hover dark:text-[#333333]">Address: Building-207, Ranavola Avenue <br /> Main Road, Sector-10, Uttara, Dhaka-1230</a>
                    <a className="link link-hover dark:text-[#333333]">Phone: 01605229868 (bkash payment)</a>
                    <a className="link link-hover dark:text-[#333333]">Email: support@rasanasa.com</a>
                    <div className="flex items-center gap-6 mt-4 ">
                        <span className="border border-black p-2 rounded-full dark:text-black"><FaFacebookF /></span>
                        <span className="border border-black p-2 rounded-full dark:text-black"><FaInstagram /></span>
                        <span className="border border-black p-2 rounded-full dark:text-black"><FaYoutube /></span>
                        <span className="border border-black p-2 rounded-full dark:text-black"><FaLinkedinIn /></span>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;