import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function ChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height="70%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8" // Change the stroke color
          strokeWidth={2.3} // Change the stroke width
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
