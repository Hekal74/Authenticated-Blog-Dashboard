import React, { useState, useEffect } from "react";
import UserAvatar from "/assets/user-avatar.png"
import "remixicon/fonts/remixicon.css";


interface SideBarProps {
  closeSidebar?: () => void;
  isOpen: boolean; // New prop to track if the sidebar is open
}

const SideBar: React.FC<SideBarProps> = ({ closeSidebar, isOpen }) => {
  // Local state to control the visibility of the hide button
  const [showHideBtn, setShowHideBtn] = useState(false);

  // Whenever the sidebar is opened again, reset the hide button to visible
  useEffect(() => {
    if (isOpen) {
      setShowHideBtn(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    // Hide the close button immediately
    setShowHideBtn(false);
    // Call the parent's closeSidebar function to hide the sidebar
    if (closeSidebar) {
      closeSidebar();
    }
  };
  return (
    <div className="relative h-full w-[264px] p-4 bg-white block">
      {/* Hide button (only visible when showHideBtn is true) */}
      <div className="hidden lg:block">
        {showHideBtn && closeSidebar && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-[-20px] bg-blue-600 text-white p-2 rounded-r-md shadow-lg"
          >
            &lt;
          </button>
        )}
      </div>

      {/* Sidebar content */}
      <div className="w-[264px] ">
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1">
          <i className="ri-book-2-line w-4 h-4 text-black p-[10px_8px] flex items-center justify-center"></i>
          <span className="w-[176px] h-[20px]">Introduction</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1">
          <i className="ri-heart-pulse-line w-4 h-4 text-black p-[10px_8px] flex items-center justify-center"></i>
          <span className="w-[176px] h-[20px]">Healthcare</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD]  rounded-lg gap-2 p-2 mb-1">
          <i className="ri-car-line w-4 h-4 text-black p-[10px_8px] flex items-center justify-center"></i>
          <span className="w-[176px] h-[20px]">Automotive</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1">
          <i className="ri-handbag-line w-4 h-4 text-black p-[10px_8px] flex items-center justify-center"></i>
          <span className="w-[176px] h-[20px]">E-commerce</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1">
          <i className="ri-hand-coin-line w-4 h-4 text-black p-[10px_8px] flex items-center justify-center"></i>
          <span className="w-[176px] h-[20px]">Retail</span>el 
        </div> 
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1">
          <i className="ri-plane-line w-4 h-4 text-black p-[10px_8px] flex items-center justify-center"></i>
          <span className="w-[176px] h-[20px]">Travel</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1">
          <i className="ri-money-dollar-circle-line w-4 h-4 text-black p-[10px_8px] flex items-center justify-center"></i>
          <span className="w-[176px] h-[20px]">financial</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] not-last:rounded-lg gap-2 p-2 mb-1">
          <i className="ri-building-2-line w-4 h-4 text-black p-[10px_8px] flex items-center justify-center"></i>
          <span className="w-[176px] h-[20px]">Read estate</span>
        </div>
        <div className="flex items-center w-[216px] h-[36px] hover:border hover:border-[#DEE1E7] hover:bg-[#FCFCFD] rounded-lg gap-2 p-2 mb-1">
          <i className="ri-tools-line w-4 h-4 text-black p-[10px_8px] flex items-center justify-center"></i>
          <span className="w-[176px] h-[20px]">Manfacturing</span>
        </div>
        </div>

      {/* Rate Us section */}
      <div className="mt-6 p-2 bg-gray-100 rounded-lg flex items-center justify-between lg:hidden">
        <span>⭐ Rate us</span>
      </div>

      {/* Get Full Version Button */}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg lg:hidden">
        Get Full version →
      </button>

      {/* Plan Information */}
      <div className="mt-6 p-3 bg-blue-50 rounded-lg flex items-center space-x-2">
        <span className="bg-blue-600 text-white rounded-full p-2">⏰</span>
        <div>
          <p className="text-sm font-medium">12 days left</p>
          <p className="text-xs text-gray-600">Get the full version now</p>
        </div>
      </div>

      {/* User Data */}
      <div className="mt-6 p-3 flex items-center space-x-3">
        <img
          src={UserAvatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">M. Hussain</p>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
