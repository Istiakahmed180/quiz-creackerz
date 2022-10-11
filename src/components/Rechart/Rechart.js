import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Rechart = () => {
  const rechart = useLoaderData();
  const { data } = rechart;
  return (
    <div className="flex justify-center">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="total" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Rechart;
