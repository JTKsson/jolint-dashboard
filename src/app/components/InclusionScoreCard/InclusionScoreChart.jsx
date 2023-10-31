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
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--c-bright-blue)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--c-bright-blue)"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--c-mellow-blue)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--c-mellow-blue)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Month"
          stroke="var(----text-color-dark)"
          tick={{ fontSize: 12 }}
        />
        <YAxis
          dataKey="Inclusion score"
          type="number"
          domain={[0, 100]}
          stroke="var(----text-color-dark)"
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Company Average"
          stroke="var(--c-mellow-blue)"
          fill="url(#colorPv)"
          strokeWidth={2.3}
          // isAnimationActive={false} //***disable animation***
        />
        <Area
          type="monotone"
          dataKey="Inclusion score"
          stroke="var(--c-bright-blue)"
          fill="url(#colorUv)"
          strokeWidth={2.3}
          // isAnimationActive={false} //***disable animation***
        />
        <Area
          type="monotone"
          dataKey="Benchmark"
          stroke="#EE6A76"
          fill="transparent"
          strokeWidth={2.3}
          strokeDasharray="4 4"
          // isAnimationActive={false} //***disable animation***
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
