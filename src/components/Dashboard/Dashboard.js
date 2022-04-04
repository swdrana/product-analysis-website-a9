import React, { useEffect, useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";
const Dashboard = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="p-5 d-flex justify-content-evenly">
      {/* Chart 1 */}

      <LineChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="5" />
        <XAxis dataKey="month" />
        <YAxis dataKey="investment" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
      </LineChart>

      {/* Chart 2  */}

      <ComposedChart width={500} height={250} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area
          type="monotone"
          dataKey="investment"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="sell" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Dashboard;
