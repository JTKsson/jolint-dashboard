'use client'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function ChartComponent({ data }) {
  // Round down and remove decimal places for each data point
  const roundedData = data.map((item) => ({
    ...item,
    'Inclusion score': Math.floor(item['Inclusion score']),
    'Company Average': Math.floor(item['Company Average']),
  }))

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        width={500}
        height={400}
        data={roundedData} // Use the rounded data
        strokeWidth={0}
        margin={{ top: 0, right: 10, left: -25, bottom: -7 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis dataKey="Inclusion score" type="number" domain={[0, 100]} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Inclusion score"
          stroke="#82ca9d"
          fill="#82ca9d"
          strokeWidth={2.3}
        />
        <Area
          type="monotone"
          dataKey="Company Average"
          stroke="#8884d8"
          fill="#8884d8"
          strokeWidth={2.3}
        />
        <Area
          type="monotone"
          dataKey="Benchmark"
          stroke="#EE6A76"
          fill="transparent"
          strokeWidth={2.3}
          strokeDasharray="4 4"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
