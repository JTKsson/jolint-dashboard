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
  // Round up the "Inclusion score" data and remove decimals
  const roundedData = data.map((item) => ({
    ...item,
    'Inclusion score': Math.ceil(item['Inclusion score']),
  }))

  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={500}
        height={400}
        strokeWidth={0}
        data={roundedData} // Use the rounded data
        margin={{ top: 0, right: 2, left: -25, bottom: -7 }}
      >
        <XAxis dataKey="Month" />
        <YAxis dataKey="Inclusion score" type="number" domain={[0, 100]} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Inclusion score"
          stroke="#8884d8"
          strokeWidth={2.3}
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
