import { useState } from "react";
import { Link } from "react-router";
import image1 from "../assets/images/image 1.png"
import logo from '../assets/images/logo.svg'



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login successful!");
  };

  return (
  <div className="">
   


    <div className="w-full max-w-md mx-auto lg:flex lg:flex-row-reverse lg:max-w-none lg:mx-0">
         
        <div className="lg:w-1/2 lg:h-screen">
        <img src={image1} 
         className="rounded-[10px] object-cover object-[50%_40%] w-full h-[216px] sm:h-64 lg:h-full lg:rounded-none"/>
       </div>
        
      <div className="px-4 lg:px-30 lg:w-1/2 lg:mt-11 lg:px-30 ">

        <img src={logo}  className="hidden lg:block lg:mt-16"/>

         <div className="mt-6">
           <h1 className="text-3xl mb-2  mt-5.5 font-Manrope text-{#081411} mt-6">
             Log in
           </h1>

           <p className="text-gray-500 mt-2">
              welcome back, Please enter your details
            </p>
         </div>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="w-full mb-5 ">
            <label
              htmlFor="email"
              className="block rounded-lg w-full mt-5 text-sm font-Manrope text-{#676565} mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Password */}
          <div className="mb-5 mt-3 w-full">
            <label
              htmlFor="password"
              className="block text-sm mt-2 rounded-lg w-full text-sm font-Manrope text-{#676565} mb-2 mt-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex items-center justify-between mb-6 text-sm">

            <label className="flex items-center gap-2 text-{#676565}">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  setRememberMe(event.target.checked)
                }
                className="accent-purple-600"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-red-600 font-semibold hover:text-red-500"
            >
              Forgot Password?
            </Link>

           {/* <Link to="/forgotpassword">Forgot Password?</Link> */}

          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-[#1A3C34] lg:bg-[#A5A8A8] text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition duration-300 mt-8"
          >
            Login
          </button>

        </form>

        {/* Sign up */}
        <div className="flex justify-center items-center lg:flex gap-1 mt-6.5">
          <span className="text-center text-sm text-[#454444]">
          Not registered yet?
          </span>
          <Link 
            to="/sign-up"
            className="text-[#454444] hover:underline"
          >
            Create an Account
          </Link>

         </div>
        
      </div>
    </div>


  </div>
  );
}

export default Login;