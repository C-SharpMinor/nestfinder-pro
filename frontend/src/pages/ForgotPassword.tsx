import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import image1 from '../assets/images/image 1.png'
import logo from '../assets/images/logo.svg'

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Sample successful response
    const sampleResponse = {
      success: true,
      message: "Password reset instructions have been sent to your email!",
    };

    if (sampleResponse.success) {
      setMessage(sampleResponse.message);
    }
  };
// import React from 'react'

  return (
    <main className="min-h-screen flex justify-center">

      <div className="w-full max-w-md lg:flex lg:flex-row-reverse lg:max-w-none ">
           
           <div className="lg:w-1/2 lg:h-screen">
            <img src={image1}
            className="rounded-[10px] object-cover object-[50%_40%] w-full h-[216px] sm:h-64 lg:h-full lg:rounded-none" />
           </div>
        {/* Heading */}

           <div className="px-4 lg:w-1/2 lg:px-30">

            <div className="hidden lg:block lg:mt-11">
              <img src={logo} />
            </div>
        <h1 className="text-2xl lg:mt-3 font-Manrope style-Bold text-[#081411] mb-3 mt-6.5">
          Forgot Password
        </h1>

        <p className="text-gray-500 lg:mb-9 text-sm leading-relaxed mb-6 mt-3">
         welcome back, Please enter your details
        </p>

        {/* Email Form */}

        <form
          onSubmit={handleForgotPassword}
          className="flex flex-col gap-4"
        >

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>

          {/* Error Message */}

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          {/* Success Message */}

          {message && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-700">
                {message}
              </p>
            </div>
          )}

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-800 lg:mt-15.5 text-white font-semibold py-3 rounded-lg transition duration-300 mt-9"
          >
            Recover Password
          </button>

        </form>

        <div className="flex justify-center items-center gap-1 mt-6 text-sm">
  <span className="text-gray-500">
    Already have an account?
  </span>

  <Link
    to="/sign-up"
    className="font-medium text-gray-500 hover:underline"
  >
    Sign in
  </Link>
</div>
          
        </div>
      </div>

    </main>
  );
}

export default ForgotPassword;