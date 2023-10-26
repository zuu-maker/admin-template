import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { DriveFolderUpload } from "@mui/icons-material";

function Add() {
  const [file, setFile] = useState("");
  return (
    <div className="flex">
      <Sidebar />
      <div className="basis-5/6">
        <Navbar />

        <div className="p-3 m-5 shadow-lg">
          <h4 className="text-gray-500 text-xl">Add new user</h4>
        </div>

        <div className="p-3 m-5 shadow-lg flex">
          <div className="basis-1/3 flex justify-center ">
            <img
              className="w-28 h-28 rounded-full object-cover"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
              }
              alt=""
            />
          </div>

          <div className="basis-2/3">
            <form className="flex flex-wrap gap-5 justify-around">
              <div className="w-2/5">
                <label className=" flex items-center gap-2 " htmlFor="file">
                  {" "}
                  Image: <DriveFolderUpload className="cursor-pointer" />{" "}
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                  id="file"
                  type="file"
                />
              </div>
              <div className="w-2/5">
                <label>Username</label>
                <input
                  className="block w-full p-2  h-10 text-gray-900 shadow appearance-none border rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline sm:text-sm sm:leading-6 dark:text-white bg-transparent dark:placeholder:text-gray-400"
                  type="text"
                  placeholder="jondoe"
                />
              </div>

              <div className="w-2/5">
                <label>Name and Surname</label>
                <input
                  className="block w-full p-2  h-10 text-gray-900 shadow appearance-none border rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline sm:text-sm sm:leading-6 dark:text-white bg-transparent dark:placeholder:text-gray-400"
                  type="text"
                  placeholder="jon doe"
                />
              </div>
              <div className="w-2/5">
                <label>Email</label>
                <input
                  className="block w-full p-2  h-10 text-gray-900 shadow appearance-none border rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline sm:text-sm sm:leading-6 dark:text-white bg-transparent dark:placeholder:text-gray-400"
                  type="text"
                  placeholder="jondoe@mail.com"
                />
              </div>
              <div className="w-2/5">
                <label>Phone</label>
                <input
                  className="block w-full p-2  h-10 text-gray-900 shadow appearance-none border rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline sm:text-sm sm:leading-6 dark:text-white bg-transparent dark:placeholder:text-gray-400"
                  type="text"
                  placeholder="098859585"
                />
              </div>
              <div className="w-2/5">
                <label>Password</label>
                <input
                  className="block w-full p-2  h-10 text-gray-900 shadow appearance-none border rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline sm:text-sm sm:leading-6 dark:text-white bg-transparent dark:placeholder:text-gray-400"
                  type="password"
                />
              </div>
              <div className="w-2/5">
                <label>Address</label>
                <input
                  className="block w-full p-2  h-10 text-gray-900 shadow appearance-none border rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline sm:text-sm sm:leading-6 dark:text-white bg-transparent dark:placeholder:text-gray-400"
                  type="text"
                  placeholder="malberry street"
                />
              </div>
              <div className="w-2/5">
                <label>Country</label>
                <input
                  className="block w-full p-2  h-10 text-gray-900 shadow appearance-none border rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline sm:text-sm sm:leading-6 dark:text-white bg-transparent dark:placeholder:text-gray-400"
                  type="text"
                  placeholder="USA"
                />
              </div>
              <button className="w-36 p-2 bg-teal-500 text-white font-medium cursor-pointer mt-2">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
