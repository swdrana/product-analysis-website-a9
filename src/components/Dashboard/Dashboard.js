import React, { useEffect, useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
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
    <div className="row d-flex justify-content-evenly">
      {/* Chart 1 */}

      <LineChart width={500} height={250} data={data} className="col-md-6">
        <CartesianGrid strokeDasharray="5" />
        <XAxis dataKey="month" />
        <YAxis dataKey="investment" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
      </LineChart>

      {/* Chart 2  */}

      <ComposedChart width={500} height={250} data={data} className="col-md-6">
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

      {/* Chart 3 */}

      <PieChart width={500} height={250} className="col-md-6">
        <Pie
          data={data}
          dataKey="sell"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="rgb(65, 62, 160)"
        />
        <Pie
          data={data}
          dataKey="investment"
          nameKey="revenue"
          innerRadius={60}
          outerRadius={80}
          fill="orange"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>

      {/* Chart 4  */}

      <RadarChart outerRadius={90} width={500} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="month" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Investment"
          dataKey="investment"
          stroke="orange"
          fill="orange"
          fillOpacity={0.6}
        />
        <Radar
          name="Revenue"
          dataKey="revenue"
          stroke="orangered"
          fill="orangered"
          fillOpacity={0.6}
        />
        <Radar
          name="Sell"
          dataKey="sell"
          stroke="rgb(65, 62, 160)"
          fill="rgb(65, 62, 160)"
          fillOpacity={0.7}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </div>
  );
};

export default Dashboard;
