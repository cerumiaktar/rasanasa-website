import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-base-200 dark:bg-base-200 ">
            <footer className="footer text-base-content p-10 container mx-auto">
                <aside>
                    <img src="https://i.ibb.co.com/30KnQxX/rasanasa-logo.png" alt="" />
                    <form>
                        <fieldset className="form-control w-80">
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn bg-[#0474BC] join-item text-white">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                    <p>
                        Rasanasa is a premier online platform offering a vast <br /> selection of clothing, electronics, home appliances, <br /> and electric products for sale. Shop with confidence <br /> at Rasanasa for a seamless online shopping experience.
                    </p>
                    <img className="w-40 mt-4" src="https://i.ibb.co.com/rsLrcz6/play.png" alt="" />
                </aside>
                <nav>
                    <h6 className="footer-title border-b-2 border-[#333333] pb-2">Additional Information</h6>
                    <a className="link link-hover ">Terms & Conditions</a>
                    <a className="link link-hover">Return Policy</a>
                    <a className="link link-hover">Support Policy</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Delete Account</a>
                    <a className="link link-hover">Licence : 009750/2024</a>
                </nav>
                <nav>
                    <h6 className="footer-title border-b-2 border-[#333333] pb-2">My Account</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Login</a>
                    <a className="link link-hover">Order History</a>
                    <a className="link link-hover">My Wishlist</a>
                    <a className="link link-hover">Track Order</a>
                    <button className="btn bg-[#0474BC] text-white">Seller</button>
                </nav>
                <nav>
                    <h6 className="footer-title border-b-2 border-[#333333] pb-2">Contact Info</h6>
                    <a className="link link-hover">Address: Building-207, Ranavola Avenue <br /> Main Road, Sector-10, Uttara, Dhaka-1230</a>
                    <a className="link link-hover">Phone: 01605229868 (bkash payment)</a>
                    <a className="link link-hover">Email: support@rasanasa.com</a>
                    <div className="flex items-center gap-6 mt-4 ">
                        <span className="border border-black p-2 rounded-full"><FaFacebookF /></span>
                        <span className="border border-black p-2 rounded-full"><FaInstagram /></span>
                        <span className="border border-black p-2 rounded-full"><FaYoutube /></span>
                        <span className="border border-black p-2 rounded-full"><FaLinkedinIn /></span>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;