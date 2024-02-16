import React, { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const MainTodo = () => {
  const [itemsList, setItemsList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    setItemsList((prevState) => [...prevState, item]);
    setItem("");
  };

  const deleteItem = (itemToDelete) => {
    setItemsList((prevState) =>
      prevState.filter((existingItem) => existingItem !== itemToDelete)
    );
  };

  return (
    <div className="grid place-items-center h-screen bg-black">
      <div className="bg-gradient-to-r from-indigo-300 to-white w-[822px] p-14">
        <h3 className="text-4xl font-bold text-black mb-2">TODO List App</h3>
        <span className=" my bg-[#a06464] opacity-80 text-white rounded px-1">Do it now.</span>
        <br />
        <div className="flex justify-around my-4">
          <TodoInput item={item} setItem={setItem} addItem={addItem} />
        </div>
        <div>
          <Header list={itemsList} />
        </div>
        <TodoList itemsList={itemsList} deleteItem={deleteItem} setItemsList={setItemsList} />
      </div>
    </div>
  );
};

export default MainTodo;
