import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={500}>
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip
          cursor={false}
          contentStyle={{ textTransform: "capitalize" }}
        />
        <CartesianGrid strokeDasharray='3 3' />
        <Bar dataKey='total' fill='#1ea3b1' />
      </BarChart>
    </ResponsiveContainer>
  );
};
