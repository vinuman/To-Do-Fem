import React from "react";
import { useSelector } from "react-redux";
import { selectAllTodo } from "./TodoSlice";
import iconCheck from "../../images/icon-check.svg";
import cross from "../../images/icon-cross.svg";

const TodoList = () => {
  const todos = useSelector(selectAllTodo);

  const todolist = todos.map((todo, index) => (
    <div
      key={todo.id}
      className={`flex items-center p-4 border border-gray-400 cursor-pointer hover:bg-slate-100  w-[70%] h-[60px] mx-auto bg-[#ffffff] ${
        index === 0 ? "rounded-t-md" : ""
      } ${index === todos.length - 1 ? "rounded-b-md" : ""}`}
    >
      <div>
        {todo.active === true ? (
          <div
            className={`h-[1.5rem] w-[1.5rem] z-10 border  rounded-full cursor-pointer ${
              todo.active === false ? "border-e-gray-700" : "border-e-gray-400"
            }`}
          ></div>
        ) : (
          <img
            className={`h-[1.5rem] w-[1.5rem] z-10 border  rounded-full cursor-pointer ${
              todo.active === false ? "border-e-gray-700" : "border-e-gray-400"
            }`}
            src={cross}
            alt="checked icon"
          ></img>
        )}
      </div>
      <p
        className={`pl-2 text-xl  tracking-wide  ${
          todo.active === false ? " text-gray-400" : "text-gray-700"
        }`}
      >
        {todo.title}
      </p>
    </div>
  ));

  return (
    <>
      <div className="h-[60px] w-[85%] absolute top-[260px] left-[110px] ">
        {todolist}
      </div>
    </>
  );
};

export default TodoList;
