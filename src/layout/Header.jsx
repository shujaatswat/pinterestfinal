import React from "react";
import { PinterestLogo } from "../assets/SvgIcons";
import CustomButton from "../common/CustomButton";
import { Link, Navigate } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 fixed bg-white z-10 w-screen ">
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-center text-red-600">
          <PinterestLogo className="h-8 w-8" /> {/* Adjust size as needed */}
          <span className="text-medium font-bold ml-2 font-system-ui">
            Pinterest
          </span>
        </Link>
        <Link
          to="/watch"
          className="text-gray-800  text-medium hover:text-gray-400"
        >
          Watch
        </Link>
        <Link
          to="/explore"
          className="text-gray-800  text-medium hover:text-gray-400"
        >
          Explore
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          to="/about"
          className="text-gray-800  text-medium hover:text-gray-400"
        >
          About
        </Link>
        <Link
          to="/business"
          className="text-gray-800  text-medium hover:text-gray-400"
        >
          Business
        </Link>
        <Link
          to="/blog"
          className="text-gray-800  text-medium hover:text-gray-400"
        >
          Blog
        </Link>
        <CustomButton
          btnText="Log in"
          className="bg-red-600 hover:bg-red-700 text-white text-medium "
          onClick={() => Navigate("/login")}
        />
        <CustomButton
          btnText="Sign up"
          className="bg-gray-300 hover:bg-gray-400 text-black text-medium"
          onClick={() => Navigate("/signup")}
        />
      </div>
    </header>
  );
}

export default Header;
