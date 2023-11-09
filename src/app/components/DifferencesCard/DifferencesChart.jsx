'use client'
import { useState, useEffect } from 'react'
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar
} from 'recharts'

import DifferencesNav from './DifferencesNav'
import styles from './differencesCard.module.css'

export default function DifferencesCardChart({ data }) {

    // console.log(data);

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

    console.log("selectedCategory", selectedCategory)


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

    // console.log("RESULTS WorkCopy", results)

    selectedData = results.filter(
      (item) =>
          item.demographic_category === selectedCategory
  )

//   console.log("selectedData", selectedData)
  })

  const plotData = selectedData.map(obj => {
    const { demographic_category, ...plotObj} = obj;
    return plotObj;
  })

  console.log(plotData);
  return (
   <>
        <DifferencesNav 
        uniqueCategories={uniqueCategories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange} />
   </>
  )
}
