'use client'
import { useState, useEffect } from 'react'
import data from '../../assets/newHiresData.json'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import NewHiresNav from './NewHiresNav'
import styles from './newHiresCard.module.css'

export default function NewHiresChart() {
  const [selectedCategory, setSelectedCategory] = useState(
    data[0]?.demographic_category,
  ) // Initialize with the first category
  const [selectedMetric, setSelectedMetric] = useState('Team Inclusion') // Default metric

  const uniqueCategories = [
    ...new Set(data.map((item) => item.demographic_category)), // Extract unique demographic categories
  ]

  const uniqueMetrics = [...new Set(data.map((item) => item.metric))] // Extract unique metrics

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value) // Handle category change
  }
  const handleMetricChange = (e) => {
    setSelectedMetric(e.target.value) // Handle metric change
  }

  useEffect(() => {
    setSelectedCategory(data[0]?.demographic_category) // This effect sets the selectedCategory to the first category when the component mounts
  }, [])

  // Filter the data based on the selected category and metric
  const filteredData = data.filter(
    (item) =>
      item.demographic_category === selectedCategory &&
      item.metric === selectedMetric,
  )

  filteredData.forEach((item) => {
    item.variation = Math.floor(item.variation) // Round down the "variation" value for each data point
  })

  return (
    <>
      <NewHiresNav
        uniqueCategories={uniqueCategories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        uniqueMetrics={uniqueMetrics}
        selectedMetric={selectedMetric}
        handleMetricChange={handleMetricChange}
      />
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={filteredData}
          margin={{ top: 0, right: 10, left: -38, bottom: -7 }}
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
          </defs>
          <XAxis
            tick={{ fontSize: 12 }}
            stroke="var(----text-color-dark)"
            dataKey="demographic_value"
          />
          <YAxis
            stroke="var(----text-color-dark)"
            tick={{ fontSize: 12 }}
            dataKey="variation"
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="variation"
            name={selectedMetric}
            stroke="var(--c-bright-blue)"
            fill="url(#colorUv)"
            strokeWidth={2.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
