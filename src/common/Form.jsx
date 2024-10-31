import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleIcon, PinterestLogo } from "../assets/SvgIcons";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-100 rounded-2xl w-[430px] flex items-center h-auto py-5 px-12 relative ">
      <div className="p-6">
        <PinterestLogo className="h-8 w-8 mx-auto" />
        <h2 className="text-center text-2xl font-semibold">
          Welcome to Pinterest
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Find new ideas to try
        </p>

        <form>
          <label htmlFor="" className="mb-3 ">
            Email
          </label>
          <input
            className="w-full h-10 mb-4 border rounded-xl p-4"
            type="email"
            placeholder="email"
          />
          <label htmlFor="" className="mb-3 ">
            Password
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full h-10 p-4 border rounded-xl "
              placeholder="create a password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <label htmlFor="" className="mb-3 ">
            Birthdate
          </label>
          <input className="w-full h-10 mb-3 rounded-xl p-4" type="date" />
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-3xl"
          >
            Continue
          </button>
        </form>

        <div className="text-center my-4 font-semibold">OR</div>

        <button className="w-full border border-gray-300 hover:bg-gray-100 py-2 rounded-3xl flex items-center justify-around gap-2">
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing, you agree to Pinterest's
          <strong className="text-sm cursor-pointer mx-1 font-medium text-gray-700">
            Terms of Service
          </strong>
          and
          <strong className="text-sm cursor-pointer mx-1 font-medium text-gray-700">
            acknowledge
          </strong>{" "}
          you've read our
          <strong className="text-sm cursor-pointer mx-1 font-medium text-gray-700">
            Privacy Policy
          </strong>
          .
        </p>
        <p className="text-center my-4 text-gray-500">
          Already a member?
          <Link to="/login" className="text-blue-500 underline">
            Log in
          </Link>
        </p>
      </div>
      <div className="bg-gray-200 absolute bottom-0 left-0 w-full py-3 rounded-bl-xl rounded-br-xl text-center cursor-pointer text-gary-700">
        Create a free business account
      </div>
    </div>
  );
}
