import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import image1 from '../assets/images/image 1.png'
import logo from '../assets/images/logo.svg'
import checkbox from '../assets/images/checker.svg'

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Sample successful response
    const sampleResponse = {
      success: true,
      message: "Password reset successful!",
    };

    if (sampleResponse.success) {
      setShowModal(true);
    }
  };

  return (
    <main className="min-h-screen mx-md mx-auto lg:max-0 bg-white items-center flex flex-col lg:flex-row lg:flex-row-reverse w-full max-w-sm lg:max-w-full lg:justify-between lg:items-start lg:px-0 bg-gray-100">
        
        
   <img src={image1} 
    className="w-md lg:w-1/2 lg:object-center lg:h-screen rounded-lg h-[216px] object-[50%_40%] object-cover"/>

      <div className="px-4 w-full max-w-md pt-4 md:p-10 rounded-2xl lg:py-11 lg:mx-auto lg:max-w-lg ">

          <img src={logo}
          className="mb-3 hidden lg:block" />
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Reset Password
        </h1>

        <p className="text-gray-500 text-sm mb-8">
          Please enter a new password to take you back to your account.
        </p>

        <form onSubmit={handleReset} className="flex flex-col gap-4">

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* <p className="text-xs text-gray-500">
            Password must contain at least 8 characters.
          </p> */}

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition duration-300 lg:mt-14"
          >
            Reset Password
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

      {/* Success Modal */}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">

          <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-xl text-center">

            <div className="w-16 h-16 text-green-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5">
              <img src={checkbox}/>
            </div>

            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Password changed Successfully
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your password has been updated successfully you can now login with the new password.
            </p>

            <Link
              to="/login"
              className="block w-[142px] mx-auto bg-[#1A3C34] hover:bg-green-900 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Go to Login
            </Link>
            

          </div>
     
        </div>
        
      )}
         
    </main>
  );
}

export default ResetPassword;