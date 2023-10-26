import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Widget from "@/components/Widget";
import FeaturedChart from "@/components/FeaturedChart";
import Chart from "@/components/Chart";
import Table from "@/components/Table";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="basis-5/6">
        <Navbar />
        <div className="flex p-4 space-x-5">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="flex py-3 px-4 space-x-5 ">
          <FeaturedChart />
          <Chart aspect={2 / 1} title="Last 6 Months Revenue" />
        </div>
        <div className="shadow-xl p-5 m-5 ">
          <h4 className="text-gray-500 mb-5">Latest Transactions</h4>
          <Table />
        </div>
      </div>
    </main>
  );
}
