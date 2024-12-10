/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import register from '../../public/register.json'

import AuthContext from "../Context/AuthContext/AuthContext.jsx";
import { useContext } from "react";
const Register = () => {
  const {registerUser, setUser} = useContext(AuthContext)
 




const handleRegister=(e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    const user = {email, password}
    console.log(user);
    registerUser(email, password)
    .then(res=> {
      // console.log(res.user);
    })
    .catch(err=>{
      console.log(err.message);
    })
}










  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2">
          
          <p className="py-6">
          <Lottie animationData={register} loop={true} />
          </p>
        </div>
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl w-1/2">
        <h1 className="text-5xl font-bold text-center my-8">Register now!</h1>
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
