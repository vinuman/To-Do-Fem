import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllTodo } from "./TodoSlice";
import { toggleTodoActive } from "./TodoSlice";
import TodoBoard from "../TodoBoard";
import { selectedBoard } from "./BoardSlice";
import { selectedLightMode } from "../darkmode/DarkSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodo);
  const board = useSelector(selectedBoard);
  const light = useSelector(selectedLightMode);

  const handleTodoItem = (id) => {
    dispatch(toggleTodoActive(id));
  };

  const todolistAll = todos.map((todo, index) => (
    <div
      onClick={() => handleTodoItem(todo.id)}
      key={todo.id}
      className={`flex items-center p-4  cursor-pointer    w-[100%]  mx-auto  ${
        index === 0 ? "rounded-t-md" : ""
      } ${index === todos.length - 1 ? "rounded-b-md" : ""}  ${
        light
          ? "border border-gray-200 bg-white hover:bg-slate-100"
          : "border border-slate-800 bg-[#393A4B] hover:bg-slate-900"
      }`}
    >
      <div
        className={`w-[1.6rem] h-[1.6rem] rounded-full border border-gray-300 ${
          todo.active === false ? "bg-gray-400" : ""
        }`}
      ></div>
      <p
        className={`ml-2 text-xl font-josefine tracking-wide font-bold  ${
          light ? "text-black" : " text-white"
        } ${todo.active === false ? " line-through" : ""}`}
      >
        {todo.title.substring(0, 50)}
      </p>
    </div>
  ));

  const todolistActive = todos
    .filter((todo, index) => {
      return todo.active === true;
    })
    .map((todo, index) => (
      <div
        onClick={() => handleTodoItem(todo.id)}
        key={todo.id}
        className={`flex items-center p-4  cursor-pointer hover:bg-slate-100   w-[100%]  mx-auto  ${
          index === 0 ? "rounded-t-md" : ""
        } ${index === todos.length - 1 ? "rounded-b-md" : ""}  ${
          light
            ? "border border-gray-200 bg-white hover:bg-slate-100"
            : "border border-slate-800 bg-[#393A4B] hover:bg-slate-900"
        }`}
      >
        <div
          className={`w-[1.6rem] h-[1.6rem] rounded-full border border-gray-300 ${
            todo.active === false ? "bg-gray-400" : ""
          }`}
        ></div>
        <p
          className={`ml-2 text-xl tracking-wide font-josefine   ${
            light ? "" : " text-[#fff]"
          }`}
        >
          {todo.title.substring(0, 50)}
        </p>
      </div>
    ));

  const todolistCompleted = todos
    .filter((todo, index) => {
      return todo.active === false;
    })
    .map((todo, index) => (
      <div
        onClick={() => handleTodoItem(todo.id)}
        key={todo.id}
        className={`flex items-center p-4  cursor-pointer hover:bg-slate-100 w-[100%]  mx-auto  ${
          index === 0 ? "rounded-t-md" : ""
        } ${index === todos.length - 1 ? "rounded-b-md" : ""}  ${
          light
            ? "border border-gray-200 bg-white hover:bg-slate-100"
            : "border border-slate-800 bg-[#393A4B] hover:bg-slate-900"
        }`}
      >
        <div
          className={`w-[1.6rem] h-[1.6rem] rounded-full border border-gray-300 ${
            todo.active === false ? "bg-gray-400" : ""
          }`}
        ></div>
        <p className={`ml-2 text-xl tracking-wide text-gray-400 line-through `}>
          {todo.title.substring(0, 50)}
        </p>
      </div>
    ));

  return (
    <>
      <TodoBoard />
      <div className="w-[90%] sm:w-[60%] absolute sm:top-[300px] sm:left-[20%] left-[5%] top-[380px] bg-black ">
        {board === 0
          ? todolistAll
          : board === 1
          ? todolistActive
          : todolistCompleted}
      </div>
    </>
  );
};

export default TodoList;
