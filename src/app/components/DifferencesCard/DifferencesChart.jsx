'use client'
import { useState, useEffect } from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  Label,
  LabelList,
} from 'recharts'
import DifferencesNav from './DifferencesNav'

export default function DifferencesCardChart({ data }) {
  const [selectedCategory, setSelectedCategory] = useState(
    data[0]?.demographic_category,
  ) // Initialize with the first category

  const uniqueCategories = [
    ...new Set(data.map((item) => item.demographic_category)), // Extract unique demographic categories
  ]

  //   console.log(uniqueCategories, "uniqueCategories");
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value) // Handle category change
  }

  useEffect(() => {
    setSelectedCategory(data[0]?.demographic_category) // This effect sets the selectedCategory to the first category when the component mounts
  }, [])

  console.log('selectedCategory', selectedCategory)

  const roundedData = data.map((item) => ({
    ...item,
    variation: Math.round(item['variation'] * 100) / 100,
  }))

  const results = []
  let selectedData = []

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

    selectedData = results.filter(
      (item) => item.demographic_category === selectedCategory,
    )
  })

  const plotData = selectedData.map((obj) => {
    const { demographic_category, ...plotObj } = obj
    return plotObj
  })

  console.log(plotData)

  return (
    <>
      <DifferencesNav
        uniqueCategories={uniqueCategories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={plotData}
          margin={{ top: 0, right: 10, left: -38, bottom: -7 }}
        >
          <XAxis
            dataKey="metric"
            tick={{ fontSize: 10 }}
            stroke="var(----text-color-dark)"
            text={5}
          />
          <YAxis
            type="number"
            stroke="var(----text-color-dark)"
            tick={{ fontSize: 12 }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="circle"
          />
          <Tooltip />
          {selectedCategory === 'Gender' && (
            <>
              <Bar dataKey="Male" fill="var(--c-mellow-blue)" />
              <Bar dataKey="Female" fill="var(--c-light-red)" />
              <Bar dataKey="Non-Binary" fill="var(--c-orange)" />
              <LabelList dataKey="metric" position="top" />
            </>
          )}
          {selectedCategory === 'Age Group' && (
            <>
              <Bar dataKey="18-25" fill="var(--c-mellow-blue)" />
              <Bar dataKey="26-35" fill="var(--c-light-red)" />
              <Bar dataKey="36-45" fill="var(--c-orange)" />
              <Bar dataKey="46-55" fill="var(--c-bright-blue)" />
              <Bar dataKey="56+" fill="var(--c-dark-gray)" />
              <LabelList dataKey="metric" position="top" />
            </>
          )}
          {selectedCategory === 'Background' && (
            <>
              <Bar dataKey="Immigrant" fill="var(--c-mellow-blue)" />
              <Bar dataKey="native" fill="var(--c-light-red)" />
              <LabelList dataKey="metric" position="top" />
            </>
          )}
          {selectedCategory === 'Ethnicity' && (
            <>
              <Bar dataKey="Majority" fill="var(--c-mellow-blue)" />
              <Bar dataKey="Minority" fill="var(--c-light-red)" />
              <LabelList dataKey="metric" position="top" />
            </>
          )}
          {selectedCategory === 'Sexual Orientation' && (
            <>
              <Bar dataKey="hetero" fill="var(--c-mellow-blue)" />
              <Bar dataKey="LBGTQ+" fill="var(--c-light-red)" />
              <LabelList dataKey="metric" position="top" />
            </>
          )}
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
