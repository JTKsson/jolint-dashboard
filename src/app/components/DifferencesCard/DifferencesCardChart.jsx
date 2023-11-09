'use client'
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar
} from 'recharts'

export default function DifferencesCardChart({ data }) {
  const roundedData = data.map((item) => ({
    ...item,
    variation: item['variation'].toFixed(2),
  }))

  const results = []

  const uniqueCategories = [
    ...new Set(roundedData.map((item) => item.demographic_category)),
  ]
  const uniqueMetrics = [...new Set(data.map((item) => item.metric))]

  uniqueCategories.forEach((category) => {
    uniqueMetrics.forEach((metric) => {
      const filteredData = roundedData.filter(
        (item) =>
          item.demographic_category === category && item.metric === metric,
      )

      const result = { metric, demographic_category: category }
      filteredData.forEach((item) => {
        result[item.demographic_value] = item.variation
      })

      results.push(result)
    })

    console.log("RESULTS", results)
  })
  return (
    <BarChart width={730} height={250} data={results}>
      <XAxis dataKey="demographic_category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="male" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" /> 
    </BarChart>
  )
}
