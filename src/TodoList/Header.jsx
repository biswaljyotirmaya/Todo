import React from 'react'

const Header = (props) => {
  return (
    <div className="w-full text-[0.8rem]">
          <div className="mb-1 flex justify-around font-bold">
            <div className="w-1/12 text-center">#</div>
            <div className="w-7/12 text-center">Task Name</div>
            <div className="w-2/12 text-center">Status</div>
            <div className="w-1/12 text-center">Edit</div>
            <div className="w-1/12 text-center">Remove</div>
          </div>

          <div className="bg-gray-600 w-full h-[1.65px] mt" />

          {props.list.length !== 0 ? (
            ""
          ) : (
            <p className="text-black font-bold text-xl mt-4 text-center">
              You don't have any task to do
            </p>
          )}

          {props.list}
        </div>
  )
}

export default Header
