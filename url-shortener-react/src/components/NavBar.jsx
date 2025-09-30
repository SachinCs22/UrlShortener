import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div className="h-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 z-50 flex items-center sticky top-0 border-b border-gray-800">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link to="/">
          <h1 className="font-bold text-3xl text-white tracking-tight sm:mt-0 mt-2">
            Shortly
          </h1>
        </Link>
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-lg ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          } transition-all duration-100 sm:h-fit sm:bg-none bg-gradient-to-r from-gray-900 via-black to-gray-900 sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0 border-b border-gray-800 sm:border-0`}
        >
          <li className="hover:text-white font-medium transition-all duration-150">
            <Link
              className={`${
                path === "/" ? "text-white font-semibold" : "text-gray-400"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-white font-medium transition-all duration-150">
            <Link
              className={`${
                path === "/about" ? "text-white font-semibold" : "text-gray-400"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          {token && (
            <li className="hover:text-white font-medium transition-all duration-150">
            <Link
              className={`${
                path === "/dashboard" ? "text-white font-semibold" : "text-gray-400"
              }`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          )}
          {!token && (
            <Link to="/register">
              <li className="sm:ml-0 -ml-1 bg-white text-black cursor-pointer w-24 text-center font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300">
                SignUp
              </li>
            </Link>
            )}

          {token && (
            <button
             onClick={onLogOutHandler}
             className="sm:ml-0 -ml-1 bg-white text-black cursor-pointer w-24 text-center font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300">
              LogOut
            </button>
            )}
        </ul>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;