import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    total: 3490,
  },
  {
    name: "Febuary",
    total: 3690,
  },
  {
    name: "March",
    total: 4490,
  },
  {
    name: "April",
    total: 5490,
  },
  {
    name: "May",
    total: 5790,
  },
  {
    name: "June",
    total: 4490,
  },
  {
    name: "July",
    total: 3490,
  },
];

function Chart({ aspect, title }) {
  return (
    <div className="basis-4/6 text-gray-400">
      <p className="mb-4 text-lg">{title}</p>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-400" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
