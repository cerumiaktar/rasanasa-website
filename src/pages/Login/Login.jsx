import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="container mx-auto">
            <div className="hero bg-base-200 py-10">
                <div className="hero-content flex-col">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="text-center lg:text-left">
                                <h1 className="text-3xl font-medium mb-3">Login to your account.</h1>
                            </div>
                            <div className="form-control">
                                <input type="tel" placeholder="+8801xxxxxxx" className="input input-bordered" required />
                                <a className="text-end text-sm font-medium mt-2" href="#">Use Email Instead</a>
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 flex items-center">
                                <input type="checkbox" />
                                <label className="label">
                                    <span className="label-text">Remember me</span>
                                </label>
                            </div>
                            <div className="form-control ">

                                <button className="btn bg-[#FCB840] text-white text-lg">Login</button>
                            </div>

                            <p>Don't have any account. Please <Link className="font-medium text-blue-700" to="/register">Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;