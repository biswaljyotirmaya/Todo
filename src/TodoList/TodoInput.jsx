// TodoInput.js
import React from 'react';

const TodoInput = ({ item, setItem, addItem }) => {
  return (
    <>
      <input
        type="text"
        className="w-80 h-10 ml-4 placeholder:text-center rounded focus:outline-none focus:caret-gray-500 pl-3 placeholder:text-xl"
        placeholder="Enter task to add in the list"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      {item && (
        <button
          className="w-2/12 pt text-center shadow-md   border border-sky-300 font-semibold text-base py-1 rounded px-4  text-sky-500 hover:shadow-black"
          onClick={addItem}
        >
          Add Task
        </button>
      )}
    </>
  );
}

export default TodoInput;
