import {
  LanguageOutlined,
  NotificationsOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React from "react";

function Navbar() {
  return (
    <div className="h-12 border border-t-0 border-solid border-gray-100 flex items-center text-sm text-gray-500">
      <div className="flex p-2 items-center justify-between w-full">
        <div className="flex items-center border border-1 border-solid border-gray-300 p-1">
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none bg-transparent"
          />
          <SearchOutlined />
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <LanguageOutlined />
            English
          </div>
          <div className="flex items-center relative">
            <NotificationsOutlined />
            <div className="w-4 h-4 bg-red-500  absolute -top-1 -right-1  text-white flex items-center justify-center text-xs font-bold rounded-xl">
              2
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="avatar"
              className="w-10 h-10 rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
