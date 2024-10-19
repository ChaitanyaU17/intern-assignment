import { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import GalleryGrid from "./GalleryGrid";
import { BsStars } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";

const SearchBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchClick = () => {
    setShowFilters(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowFilters(false), 200); // Adding delay so the user can interact with the dropdown
  };

  return (
    <div className="relative h-auto bg-gray-900">
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        {/* Left Side Navbar */}
        <div className="flex items-center space-x-4">
          <span className="font-bold text-lg ">
            <span className="text-2xl cursor-pointer font-bold">*</span> Comet
          </span>
          <span className="p-1 px-4 cursor-pointer hover:border hover:border-amber-50 hover:border-opacity-50 hover:border-b-amber-100 hover:border-b-2 rounded-full ">
            Upgrade
          </span>
          <span className="cursor-pointer p-1 px-4 hover:border hover:border-amber-50 hover:border-opacity-50 hover:border-b-amber-100 hover:border-b-2 rounded-full ">
            Home
          </span>
          <span className="cursor-pointer p-1 px-4 hover:border hover:border-amber-50 hover:border-opacity-50 hover:border-b-amber-100 hover:border-b-2 rounded-full ">
            Discover
          </span>
        </div>

        <div className="flex items-center relative w-1/3 rounded-full bg-gray-800 outline-none py-2 px-4">
          <BsStars className="text-green-400" />
          <input
            type="text"
            placeholder='Try "Traditional Pottery"'
            className="w-full bg-gray-800 text-center outline-none"
            onClick={handleSearchClick}
            onBlur={handleBlur}
          />
          <IoIosColorPalette className="text-gray-400" />
          {showFilters && (
            <div className="absolute left-0 right-0 bg-gray-800 p-4 mt-80 rounded-lg z-10 shadow-md">
            
              <div className="mb-4">
                <h3 className="text-sm mb-2 text-white">Trending</h3>
                <div className="flex flex-wrap gap-2">
                  { ["romance", "wisdom", "branding", "Typography"].map(
                    (tag, idx) => (
                      <span
                      key={idx}
                      className="flex items-center bg-gray-700 px-3 py-1 rounded-full text-white text-sm space-x-2"
                    >
                      <FaArrowTrendUp className="text-gray-400" />
                      <span>{tag}</span>
                    </span>
                    )
                  )}
                </div>
              </div>
              
              
              <div className="mb-4">
                <h3 className="text-sm mb-2 text-white">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {["#4E4D4D", "#998BFE", "#A7FF71", "#F9C70"].map(
                    (color, idx) => (
                      <span
                        key={idx}
                        className="w-8 h-8 rounded-full border border-gray-600"
                        style={{ backgroundColor: color }}
                      />
                    )
                  )}
                </div>
              </div>
              
         
              <div>
                <h3 className="text-sm mb-2 text-white">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {["Fashion", "Branding", "Packaging"].map((category, idx) => (
                    <button
                      key={idx}
                      className="bg-gray-700 px-3 py-1 rounded-full text-white text-sm"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

    
        <div className="flex items-center space-x-4">
          <FaPlus className="text-lg cursor-pointer" />
          <RiSendPlaneLine className="text-lg cursor-pointer" />
          <HiOutlineAdjustmentsHorizontal className="text-lg cursor-pointer" />
          <FaBell className="text-lg cursor-pointer" />
          <FaUserCircle className="text-lg cursor-pointer" />
        </div>
      </nav>

      <div className="flex justify-center mt-10 space-x-4">
        <button className="relative hover:bg-gray-700 px-4 py-2 rounded-full text-white">
          For You
          <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-2 bg-gray-700 text-xs px-2 py-1 rounded-full">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text ">
              Beta
            </span>
          </span>
        </button>
        <button className="bg-gray-7=900 px-4 py-2 hover:bg-gray-700 rounded-full text-white">
          Following
        </button>
      </div>

      <GalleryGrid />
    </div>
  );
};

export default SearchBar;
