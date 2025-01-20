import { FaLaptopCode, FaMicroscope, FaAtom, FaMoneyCheckAlt } from "react-icons/fa";
//  import { Link } from "react-router-dom";
// import React from 'react';

const FinderCard = () => {
  return (
    <div>
      <div className="bg-primaryBtn p-6 rounded-lg flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      <div className="text-white mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-1xl sm:text-2xl font-bold mb-2">College Finder</h1>
        <p className="text-sm mb-4">
          Choose the best college based on your qualifications, interests, and budget.
        </p>
        <button className="bg-white text-primaryBtn px-4 py-2 rounded shadow hover:bg-hoverBtn hover:text-white">
          Find Now
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 relative">
        <div className="flex justify-center items-center animate-bounce">
          <FaLaptopCode className="text-white text-4xl md:text-6xl" />
        </div>
        <div className="flex justify-center items-center animate-pulse">
          <FaMicroscope className="text-white text-4xl md:text-5xl" />
        </div>
        <div className="flex justify-center items-center animate-pulse">
          <FaAtom className="text-white text-4xl md:text-5xl" />
        </div>
        <div className="flex justify-center items-center animate-bounce">
          <FaMoneyCheckAlt className="text-white text-4xl md:text-6xl" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default FinderCard