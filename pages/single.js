import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Chart from "@/components/Chart";
import TableComponent from "@/components/Table";

function Single() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="basis-5/6">
        <Navbar />
        <div className="flex gap-5 p-5">
          <div className="basis-1/3 shadow-lg relative p-5">
            <button className="top-0 right-0 absolute p-1 rounded-md text-sm text-purple-500 bg-purple-100">
              Edit
            </button>
            <h4 className="text-base text-gray-400">Information</h4>
            <div className="flex gap-5">
              <img
                className="h-28 w-28 p-2 object-cover rounded-full"
                src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div>
                <h6 className="mb-2 text-xl text-gray-500">Jane Doe</h6>
                <div className="mb-1 text-sm text-gray-500 ">
                  <span className="font-bold mr-1">Email:</span>
                  <span className="font-normal">Jane@mail.com</span>
                </div>
                <div className="mb-1 text-sm text-gray-500 ">
                  <span className="font-bold mr-1">Phone:</span>
                  <span className="font-normal">909889797</span>
                </div>
                <div className="mb-1 text-sm text-gray-500 ">
                  <span className="font-bold mr-1">Address:</span>
                  <span className="font-normal">New york</span>
                </div>
                <div className="mb-1 text-sm text-gray-500 ">
                  <span className="font-bold mr-1">Email:</span>
                  <span className="font-normal">USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-2/3 shadow-lg p-1">
            <Chart aspect={3 / 1} title="User's Transactions last 6 months" />
          </div>
        </div>

        <div className="basis-1/3 shadow-lg relative p-5">
          <h4 className="text-base text-gray-400">Last transactions</h4>
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default Single;
