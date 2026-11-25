import { useState } from "react";
import { Link } from "react-router";
import image1 from '../assets/images/image 1.png'
import logo from '../assets/images/logo.svg'

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
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

    if (!agreeToTerms) {
      setError("Please agree to the Terms and Conditions.");
      return;
    }

    setSuccess("Account created successfully!");
    console.log("User details:", { email });
  };

  return (
    <div className="min-h-screen flex  bg-white">
      <div className="w-full max-w-md lg:flex mx-auto lg:flex-row-reverse lg:max-w-none lg:mx-0">
       
        <div className="lg:w-1/2 lg:h-screen">
           <img src={image1} 
           className="rounded-[10px] object-cover object-[50%_40%] w-full h-[216px] sm:h-64 lg:h-full lg:rounded-none"/>
         </div>

         <div className="px-4 lg:w-1/2 lg:flex-col lg:justify-center lg:px-25">
          
            <img src={logo} className="hidden lg:block lg:mt-16" />

            <div className="mb-6 mt-5 lg:mt-2.5 ">
                <h1 className="text-3xl font-bold text-gray-900 lg:mb-4">
                    Create an Account
                </h1>

                <span className="mt-2 mr-2 text-sm text-gray-500">
                    Already have an account?
                </span >
               <Link className="text-sm text-gray-500" to="/login">Log in</Link>
            </div>

           <form onSubmit={handleSignUp} className="space-y-5">

               <div className="">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email
                  </label>
                  <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
                    />
               </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                     Password
                    </label>
                    <input
                     type="password"
                     value={password}
                     onChange={(event) => setPassword(event.target.value)}
                     placeholder="Enter your password"
                     className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
                      />
                 </div>

                   <div>
                     <label className="mb-2 block text-sm font-medium text-gray-700">
                      Confirm Password
                     </label>
                      <input
                      type="password"
                      value={confirmPassword}
                       onChange={(event) => setConfirmPassword(event.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
                     />
                   </div>

                   <div className="flex items-start gap-2 mb-10">
                       <input
                          id="terms"
                          type="checkbox"
                          checked={agreeToTerms}
                          onChange={(event) => setAgreeToTerms(event.target.checked)}
                         className="mt-1 h-4 w-4 cursor-pointer accent-purple-600"
                       />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                         I agree to the terms and conditions
                    </label>
                   </div>

                       {error && (
                      <p className="text-sm text-red-600">{error}</p>
                        )}

                       {success && (
                       <p className="text-sm text-green-600">{success}</p>
                         )}

                        <button
                             type="submit"
                             className="w-full rounded-lg bg-green-900 py-3 font-semibold text-white transition hover:bg-green-800"
                              >
                                Sign Up
                         </button>

              </form>

      </div>
      
       </div>
    </div>
  );
}

export default SignUp;