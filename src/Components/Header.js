import React from "react";
import lightThemeImageMb from "../images/bg-mobile-light.jpg";
import moon from "../images/icon-moon.svg";

const Header = () => {
  return (
    <>
      <div className=" fixed w-[100%]">
        <div className=" w-[100%]">
          <img
            className="w-[100%]"
            src={lightThemeImageMb}
            alt="background image"
          ></img>
        </div>
        <div className="absolute top-10  flex items-center justify-between w-[100%] p-8">
          <h1 className="  tracking-widest uppercase text-4xl font-semibold  text-white ">
            Todo
          </h1>
          <img onScroll={moon} alt="moon icon"></img>
        </div>
        <div className="h-[80px] w-[80%] absolute top-[60%] left-[10%] bg-white rounded-md flex items-center p-4">
          <div className="w-[2rem] h-[1.8rem] border border-gray-400 rounded-full cursor-pointer"></div>
          <input
            className=" ml-4 w-[100%] h-[2rem] p-2 focus:outline-none"
            type="text"
            placeholder="Create a new task"
          ></input>
        </div>
      </div>
    </>
  );
};

export default Header;
