import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="hero bg-base-200 py-10">
                    <div className="hero-content flex-col">

                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-3xl font-medium mb-3">Create an account.</h1>
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Full Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="password" placeholder="Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="password" placeholder="Confirm Password" className="input input-bordered" required />
                                </div>
                                <div className="mt-6 flex">
                                    <input type="checkbox" />
                                    <label className="label">
                                        <span className="label-text">Agree to our <Link className="text-blue-500" to='terms'>terms and conditions.</Link> </span>
                                    </label>
                                </div>
                                <div className="form-control ">

                                    <button className="btn bg-[#FCB840] text-white text-lg">Create Account</button>
                                </div>

                                <p>Already have an account. Please <Link className="font-medium text-blue-700" to="/login">Login</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;