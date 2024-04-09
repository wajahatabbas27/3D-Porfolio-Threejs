import React from "react";

// alert hmne as a spread operator as a props send krdi hai ismein
// aLert aik object ai jismein mare pass type, text aur show hai
// hmne destructure krlia hai yhn pe
const Alert = ({ type, text }) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none lg:rounded-full lg:inline-flex items-center`}
        role='alert'
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "danger" ? "failed" : "Success"}
        </p>
        <p className='mr-2 text-right'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
