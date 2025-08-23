import React from "react";
import { MdDownload, MdDownloadForOffline } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full fixed h-16 bg-white z-10 flex items-center justify-between px-4 shadow-md lg:px-10">
      <h1 className="text-md font-bold text-[#495051] lg:text-xl">
        NAMBININTSOA OLIVIER
      </h1>
      <nav className="flex gap-4">
        <button className="flex items-center justify-center bg-green-600/90 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-600 transition duration-300">
         <span className="mr-2">Download CV
          </span> 
         <MdDownloadForOffline className="w-6 h-6" />
        </button>
       
      </nav>
    </div>
  );
};

export default Navbar;
