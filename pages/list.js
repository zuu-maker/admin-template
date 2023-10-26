import React from "react";
import Datatable from "@/components/Datatable";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function List() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="basis-5/6">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}

export default List;
