import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllTodo } from "./todo/TodoSlice";
import { setBoard } from "./todo/BoardSlice";
import { selectedBoard } from "./todo/BoardSlice";
import { deleteInactive } from "./todo/TodoSlice";
import { selectedLightMode } from "./darkmode/DarkSlice";

const TodoBoard = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodo);
  const board = useSelector(selectedBoard);
  const light = useSelector(selectedLightMode);
  const activeCards = todos.filter((item) => item.active === true).length;

  const deleteItems = () => {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const newTodo = existingTodos.filter((todo) => todo.active === true);
    console.log("testtt", newTodo);

    localStorage.setItem("todos", JSON.stringify(newTodo));

    dispatch(deleteInactive());
  };
  return (
    <>
      <div
        className={`${
          light ? "bg-[#fff]" : "bg-[#393A4B]"
        }  p-4 rounded-md sm:w-[60%] w-[90%] absolute sm:top-[220px] top-[240px] sm:left-[20%] left-[5%] sm:flex sm:justify-between font-josefine`}
      >
        <p
          className={` font-bold pb-4 md:pb-0 ${
            light ? "text-black-600" : "text-[#fff]"
          }`}
        >
          {activeCards} items left
        </p>
        <div className="flex justify-between font-bold w-[90%] sm:w-[35%]  text-[#9495A5] pb-4 md:pb-0">
          <p
            className={`${board === 0 && light ? "text-blue-600" : ""} ${
              board === 0 && !light ? " text-white" : ""
            } cursor-pointer hover:text-[#494C6B]`}
            onClick={() => dispatch(setBoard(0))}
          >
            All
          </p>
          <p
            className={`${board === 1 && light ? "text-blue-600" : ""} ${
              board === 1 && !light ? " text-white" : ""
            } cursor-pointer hover:text-[#494C6B]`}
            onClick={() => dispatch(setBoard(1))}
          >
            Active
          </p>
          <p
            className={`${board === 2 && light ? "text-blue-600" : ""} ${
              board === 2 && !light ? " text-white" : ""
            } cursor-pointer hover:text-[#494C6B]`}
            onClick={() => dispatch(setBoard(2))}
          >
            Completed
          </p>
        </div>
        <p
          onClick={deleteItems}
          className="text-black-600 font-bold text-[#9495A5] cursor-pointer hover:text-[#494C6B]"
        >
          Clear completed
        </p>
      </div>
    </>
  );
};

export default TodoBoard;
