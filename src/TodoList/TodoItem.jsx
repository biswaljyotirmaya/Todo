import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const TodoItem = ({ item, deleteItem, editItem, itemsList }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(item);
  const [todo, setTodo] = useState(true);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    editItem(item, editedText);
    setEditMode(false);
    setEditedText(editedText);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="w-full text-[0.8rem]">
      <div className="my-1 flex justify-around items-center">
        <div className="w-1/12 pt text-center font-semibold">
          {itemsList.indexOf(item) + 1}
        </div>

        {editMode ? (
          <div className="h-full w-[70%] border-none p-2 overflow-hidden text-lg">
            <input
              type="text"
              className="outline-dashed w-[80%]"
              value={editedText.length > 0 ? editedText : "Enter Something"}
              onChange={handleChange}
              autoFocus
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
            />
            <button
              className="ml-2 text-center shadow-md border border-sky-600 font-semibold text-base py-1 rounded px-4  text-sky-500 hover:shadow-black"
              onClick={() => setEditMode(false)}
            >
              Done
            </button>
          </div>
        ) : (
          <div className="w-7/12 pt text-center font-semibold text-base">
            {editedText}
          </div>
        )}
        {todo ? (
          <button
            className="w-2/12 pt text-center shadow-md   border font-semibold text-base py-1 rounded px-4  text-amber-500 hover:shadow-black"
            onClick={() => {
              setTodo(!todo);
            }}
          >
            Todo
          </button>
        ) : (
          <button
            className="w-2/12 pt text-center shadow-md   border font-semibold text-base py-1 rounded px-4 text-green-500 hover:shadow-black"
            onClick={() => {
              setTodo(!todo);
            }}
          >
            Completed
          </button>
        )}
        <div className="w-1/12 pt text-center px-3">
          <button
            className=" pt text-center shadow-md   border font-semibold text-base py-1 rounded px-4  text-sky-500 hover:shadow-black"
            onClick={handleEdit}
          >
            <MdEdit size={20} />
          </button>
        </div>
        <div className="w-1/12 text-center px-3">
          <button
            className=" pt text-center shadow-md   border font-semibold text-base p-2 rounded  text-gray-500 hover:shadow-black"
            onClick={() => deleteItem(item)}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TodoItem;
