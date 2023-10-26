import {
  KeyboardArrowDownOutlined,
  MoreVertOutlined,
} from "@mui/icons-material";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function FeaturedChart() {
  return (
    <div className="basis-2/6 p-5 shadow-lg w-full ">
      <div className="flex items-center justify-between text-gray-500 ">
        <h1 className="text-lg mb-2">Total Revenue:</h1>
        <MoreVertOutlined className="cursor-pointer" fontSize="small" />
      </div>

      <div className=" flex flex-col items-center justify-center gap-4 w-full ">
        <div className="w-28 h-28">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="font-normal text-gray-500">Total sales today</p>
        <p className="text-2xl">ZK420</p>
        <p className="text-xs text-gray-500 text-center">
          Previous transactions still being processed may not show
        </p>
        <div className="flex items-center justify-between w-full ">
          <div className="text-center">
            <p className="text-sm text-gray-500">Target</p>
            <div className="flex items-center mt-2 text-xs text-green-500">
              <KeyboardArrowDownOutlined fontSize="small" />
              <p>ZK1500</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Last Week</p>
            <div className="flex items-center mt-2 text-xs text-green-500">
              <KeyboardArrowDownOutlined fontSize="small" />
              <p>ZK1500</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Last Month</p>
            <div className="flex items-center mt-2 text-xs text-red-500">
              <KeyboardArrowDownOutlined fontSize="small" />
              <p>ZK1500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedChart;
