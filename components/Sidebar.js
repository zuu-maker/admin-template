import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";
import {
  ArrowForwardTwoTone,
  Logout,
  NotificationsOutlined,
  People,
  Person,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="basis-1/6 border border-t-0 border-r-1 border-solid border-gray-100 min-h-screen bg-white shadow-sm">
      <div className="h-12 flex items-center justify-center">
        <Link href="/">
          <span className="text-10 font-bold text-purple-700">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="pl-5">
        <ul className="list-none p-0 m-0">
          <p className="text-gray-500 font-bold text-sm mt-4 mb-0.5">MAIN</p>
          <Link href="/">
            <li className="flex items-center p-1 cursor-pointer hover:bg-slate-300">
              <DashboardIcon className="text-base text-purple-700" />
              <span className="text-sm font-semibold ml-0.5 text-gray-500">
                Dashboard
              </span>
            </li>
          </Link>
          <p className="text-gray-500 font-bold text-sm mt-4 mb-0.5">LISTS</p>
          <Link href="/list">
            <li className="flex items-center p-1 cursor-pointer hover:bg-slate-300">
              <People className="text-base text-purple-700" />
              <span className="text-sm font-semibold ml-0.5 text-gray-500">
                Users
              </span>
            </li>
          </Link>
          <Link href="#">
            <li className="flex items-center p-1 cursor-pointer hover:bg-slate-300">
              <ShoppingCartOutlined className="text-base text-purple-700" />
              <span className="text-sm font-semibold ml-0.5 text-gray-500">
                Products
              </span>
            </li>
          </Link>
          <Link href="#">
            <li className="flex items-center p-1 cursor-pointer hover:bg-slate-300">
              <ShoppingBagOutlined className="text-base text-purple-700" />
              <span className="text-sm font-semibold ml-0.5 text-gray-500">
                Orders
              </span>
            </li>
          </Link>
          <p className="text-gray-500 font-bold text-sm mt-4 mb-0.5">
            USEFUL LINKS
          </p>
          <Link href="#">
            <li className="flex items-center p-1 cursor-pointer hover:bg-slate-300">
              <ArrowForwardTwoTone className="text-base text-purple-700" />
              <span className="text-sm font-semibold ml-0.5 text-gray-500">
                Stats
              </span>
            </li>
          </Link>
          <Link href="#">
            <li className="flex items-center p-1 cursor-pointer hover:bg-slate-300">
              <NotificationsOutlined className="text-base text-purple-700" />
              <span className="text-sm font-semibold ml-0.5 text-gray-500">
                Notifications
              </span>
            </li>
          </Link>
          <p className="text-gray-500 font-bold text-sm mt-4 mb-0.5">USER</p>
          <Link href="#">
            <li className="flex items-center p-1 cursor-pointer hover:bg-slate-300">
              <Person className="text-base text-purple-700" />
              <span className="text-sm font-semibold ml-0.5 text-gray-500">
                Profile
              </span>
            </li>
          </Link>
          <Link href="#">
            <li className="flex items-center p-1 cursor-pointer hover:bg-slate-300">
              <Logout className="text-base text-purple-700" />
              <span className="text-sm font-semibold ml-0.5 text-gray-500">
                Logout
              </span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center ml-5 m-2 space-x-2">
        <div className="w-6 h-6 border-0 border-solid border-purple-700 cursor-pointer rounded-sm bg-gray-400"></div>
        <div className="w-6 h-6 border-0 border-solid border-purple-700 cursor-pointer rounded-sm bg-black"></div>
      </div>
    </div>
  );
}

export default Sidebar;
