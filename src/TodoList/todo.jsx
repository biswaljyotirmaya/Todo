import React, { useState } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Header from './Header';

const todo = () => {
  const [itemsList, setItemsList] = useState([]);
  const [item, setItem] = useState("");
  const [editingItem, setEditingItem] = useState(false); 
  const [statuses, setStatuses] = useState({});
  const [updated, setUpdated] = useState("");

  const addItem = () => {
    setItemsList((prevState) => [...prevState, item]);
    setStatuses((prevStatuses) => ({ ...prevStatuses, [item]: 'border px-2 py-1 border-gray-400 rounded text-gray-400 cursor-pointer' }));
    setItem("");
  };

  const deleteItem = (item) => {
    setItemsList((prevState) => prevState.filter((existingItem) => existingItem !== item));
    setStatuses((prevStatuses) => {
      const { [item]: _, ...rest } = prevStatuses;
      return rest;
    });
  };

  const editItem = (item) => {
    setEditingItem(item);
  };

  const saveUpdatedItem = () => {
    setItemsList((prevState) =>
      prevState.map((existingItem) => (existingItem === editingItem ? updatedItem : existingItem))
    );
    setEditingItem(null);
  };
 const itemUpdate = () =>{
  setEditingItem(false);
 }

  const statusCheck = (item) => {
    setStatuses((prevStatuses) => ({ ...prevStatuses, [item]: 'border px-2 py-1 border-green-400 rounded text-green-400 cursor-pointer' }));
  };

  const list = itemsList.map((item) => (
    <div className="w-full text-[0.8rem]" key={item}>
      <div className="mb flex justify-around items-center">
        <div className="w-1/12 text-center">{itemsList.indexOf(item) + 1}</div>
        {editingItem ? <div className='w-7/12 flex'>
          <input type="text" value={{item}} className='w-4/5 text-center focus:outline-none' />
          <div className=' border rounded text-blue-400 border-blue-400 text-center w-1/5 py-1 cursor-pointer' onClick={itemUpdate}>Add Task</div></div>:
        <div className='w-7/12 text-center'>{item}</div>}
        <div className="w-2/12 text-center ">
          <div className="flex justify-center p-1 ">
            <div className={statuses[item]} onClick={() => statusCheck(item)}>
              Todo
            </div>
          </div>
        </div>
        <div className="w-1/12 text-center">
          <div className="flex justify-center p-1 ">
            {editingItem === item ? (
              <button
                className="border p-1 border-blue-400 rounded-sm text-blue-400 cursor-pointer"
                onClick={saveUpdatedItem}
              >
                <MdEdit className="h-5 w-5" />
              </button>
            ) : (
              <button
                className="border p-1 border-blue-400 rounded-sm text-blue-400 cursor-pointer"
                onClick={() => editItem(item)}
              >
                <MdEdit className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="w-1/12 text-center">
          <div className="flex justify-center p-1 ">
            <div
              className="border p-1 border-gray-400 rounded-sm text-gray-400 cursor-pointer"
              onClick={() => deleteItem(item)}
            >
              <MdDelete className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  ));

  return (
    <div className="grid place-items-center  h-[100vh] bg-black">
      <div className="bg-white w-[822px] p-14">
        <h3 className="text-4xl font-bold text-black mb-2">TODO List App</h3>
        <span className=" text-black my bg-[#FDF8E4] rounded">Do it now.</span>
        <br />
        <div className="flex justify-around my-4">
          <input
            type="text"
            className="w-80 h-10 ml-4 placeholder:text-center rounded focus:outline-none focus:caret-pink-500 pl-3 placeholder:text-xl"
            placeholder="Enter task to add in the list"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          {item && (
            <button
              className="border rounded items-center text-sky-400 text-sm border-sky-400 px-2 py-1"
              onClick={item ? addItem : undefined}
            >
              Add Task
            </button>
          )}
        </div>

      <Header list={list}/>
      </div>
    </div>
)}
export default todo