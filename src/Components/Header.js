import React from "react";
import lightThemeImageMb from "../images/bg-mobile-light.jpg";
import lightThemeImageDt from "../images/bg-desktop-light.jpg";
import moon from "../images/icon-moon.svg";
import { addTodo } from "../features/todo/TodoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleToDoSubmit = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleToDoSubmit();
    }
  };
  return (
    <>
      <div className=" fixed w-[100%] sm:h-[300px]">
        <div className=" w-[100%] sm:h-[300px]">
          <img
            className="w-[100%] sm:hidden"
            src={lightThemeImageMb}
            alt="background image"
          ></img>
          <img
            className="w-[100%] sm:h-[40vh] sm:block hidden"
            src={lightThemeImageDt}
            alt="background image"
          ></img>
        </div>
        <div className="absolute top-10  flex items-center justify-between w-[100%] p-4 sm:px-[15%]">
          <h1 className="  tracking-widest uppercase text-4xl sm:text-5xl font-semibold  text-white ">
            Todo
          </h1>
          <img
            className=" cursor-pointer"
            onScroll={moon}
            alt="moon icon"
          ></img>
        </div>
        <div className="h-[60px] w-[90%] sm:w-[60%] absolute top-[60%] sm:top-[50%] left-[5%] sm:left-[20%] bg-white rounded-md flex items-center p-4">
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            className=" ml-4 w-[100%] h-[2rem] p-2 focus:outline-none"
            type="text"
            placeholder="Create a new task"
            value={input}
          ></input>
          <button
            onClick={handleToDoSubmit}
            className="w-[150px] h-[40px] bg-gradient-to-r from-[#5596FF] to-[#AC2DEB] rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
