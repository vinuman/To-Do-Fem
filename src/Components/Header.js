import React from "react";
import lightThemeImageMb from "../images/bg-mobile-light.jpg";
import lightThemeImageDt from "../images/bg-desktop-light.jpg";
import darkThemeImageDt from "../images/bg-desktop-dark.jpg";
import darkThemeImageMb from "../images/bg-mobile-dark.jpg";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import { addTodo } from "../features/todo/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  selectedLightMode,
  toggleDarkMode,
} from "../features/darkmode/DarkSlice";
import { nanoid } from "@reduxjs/toolkit";

const Header = () => {
  const dispatch = useDispatch();
  const light = useSelector(selectedLightMode);

  const [input, setInput] = useState("");

  const handleToDoSubmit = () => {
    if (input.trim()) {
      const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const updatedTodos = [
        ...existingTodos,
        {
          id: nanoid(),
          title: input,
          active: true,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      dispatch(
        addTodo({
          id: nanoid(),
          title: input,
          active: true,
        })
      );
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
      <div
        style={{ minHeight: "200%" }}
        className={`absolute top-0 w-[100%] ${
          light ? "bg-white" : "bg-[#171823]"
        }`}
      >
        <div className=" w-[100%] ">
          {light ? (
            <>
              <img
                className={`w-[100%] sm:hidden `}
                src={lightThemeImageMb}
                alt="background image"
              ></img>
              <img
                className={`w-[100%]  sm:block hidden`}
                src={lightThemeImageDt}
                alt="background image"
              ></img>
            </>
          ) : (
            <>
              <img
                className={`w-[100%] sm:hidden `}
                src={darkThemeImageMb}
                alt="background image"
              ></img>
              <img
                className={`w-[100%]  sm:block hidden`}
                src={darkThemeImageDt}
                alt="background image"
              ></img>
            </>
          )}
        </div>
        <div className="absolute top-10  flex items-center justify-between w-[100%] p-4 sm:px-[15%]">
          <h1
            className={` tracking-widest uppercase text-4xl sm:text-5xl font-semibold  text-white `}
          >
            Todo
          </h1>
          {light ? (
            <img
              onClick={() => dispatch(toggleDarkMode())}
              className=" cursor-pointer"
              src={moon}
              alt="moon icon"
            ></img>
          ) : (
            <img
              onClick={() => dispatch(toggleDarkMode())}
              className=" cursor-pointer"
              src={sun}
              alt="sun icon"
            ></img>
          )}
        </div>
        <div
          className={`h-[60px] w-[90%] sm:w-[60%] absolute top-[10%] sm:top-[8%] left-[5%] sm:left-[20%]  rounded-md flex items-center p-4 ${
            light ? "bg-white" : "bg-[#393A4B]"
          }`}
        >
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            className={`ml-4 font-josefine sm:text-2xl w-[100%] h-[2rem] p-2 focus:outline-none ${
              light ? "" : "bg-[#393A4B]"
            } ${light ? "" : "text-[#fff]"}`}
            type="text"
            placeholder="Create a new task"
            value={input}
          ></input>
          <button
            onClick={handleToDoSubmit}
            className="w-[150px] h-[40px] bg-gradient-to-r from-[#5596FF] to-[#AC2DEB] rounded-md font-bold font-josefine  hover:text-white"
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
