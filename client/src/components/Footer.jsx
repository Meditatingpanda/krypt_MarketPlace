import React from "react";
import { AiFillGithub } from "react-icons/ai";
import logo from "../assets/images/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Exchange
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Tutorials
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p
        onClick={() =>
          (window.location.href = "https://www.instagram.com/traveling_monk_7/")
        }
        className="text-white text-gradient flex text-sm items-center cursor-pointer text-center font-medium mt-2"
      >
        <AiFillInstagram size={15} />
        traveling_monk7
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p
        onClick={() =>
          (window.location.href = "https://github.com/lonewolf2002")
        }
        className="text-white cursor-pointer text-left flex items-center  text-base"
      >
        <AiFillGithub size={20} />
        lonewolf2002
      </p>

      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
