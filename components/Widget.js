import {
  AccountBalanceOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  Person2Outlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";

function Widget({ type }) {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <Person2Outlined className="text-2xl  p-1 bg-red-300 text-red-800 rounded-sm self-end" />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all order",
        icon: (
          <ShoppingBagOutlined className="text-2xl  p-1 bg-yellow-300 text-yellow-800 rounded-sm self-end" />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlined className="text-2xl  p-1 bg-green-300 text-green-800 rounded-sm self-end" />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See details",
        icon: (
          <AccountBalanceOutlined className="text-2xl  p-1 bg-purple-300 text-purple-800 rounded-sm self-end" />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="flex flex-1 justify-between shadow-lg p-3 roounded-md h-28">
      <div className="flex flex-col justify-between">
        <span className="font-semibold text-sm text-gray-500">
          {data.title}
        </span>
        <span className="text-2xl font-medium">
          {data.isMoney && "ZK"} {100}
        </span>
        <span className="max-w-fir text-xs underline cursor-pointer">
          {data.link}
        </span>
      </div>

      <div className="flex flex-col justify-between">
        <div className="text-xs items-center flex text-green-500">
          <KeyboardArrowUp />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
