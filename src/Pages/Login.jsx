import React, {useState} from 'react'

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const { user , logIn} = UserAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try{
      await logIn(email, password);
      navigate("/");
    } catch(err){
      console.log(err);
    };
    
  };
  return (
    <div className="w-full h-screen">
      <img
        className=" hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="///"
      />
      <div className="bg-black/55 fixed top-0 left-0 w-full h-screen" />
      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-nsans-bold">Login</h1>
            <form onSubmit={handleFormSubmit}>
              <input
                className="bg-transparent ring-1 ring-gray-800 rounded my-5 w-full py-4 pl-5 h-full"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <input
                className="bg-transparent ring-1 ring-gray-800 rounded my-5 w-full py-4 pl-5 h-full"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
              <button className="capitalize w-full rounded border border-transparent bg-cherryRed text-white py-2 px-5">
              Login
            </button>
            </form>
            <div className="flex justify-between items-center text-gray-600">
              <p>
                <input type="checkbox" className="mr-2" checked={rememberLogin} onChange={(e)=> setRememberLogin(!rememberLogin)} /> Remember me
              </p>
              <p>Need Help?</p>
            </div>

            <div className="flex  items-center text-gray-600">
              <p className="py-3 tracking-tight text-[14px]">
                New Here?
                <Link className="text-white text-[14px] pl-2 hover:text-white/60" to="/SignUp">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login