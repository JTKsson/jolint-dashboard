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
  Legend,
} from 'recharts'
import NewHiresNav from './NewHiresNav'
import styles from './newHiresCard.module.css'

export default function NewHiresChart() {
  const [selectedCategory, setSelectedCategory] = useState(
    data[0]?.demographic_category,
  )

  const uniqueCategories = [
    ...new Set(data.map((item) => item.demographic_category)),
  ]

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  useEffect(() => {
    setSelectedCategory(data[0]?.demographic_category)
  }, [])

  const roundedData = data.map((item) => ({
    ...item,
    inclusion_value: Math.round(item['inclusion_value'] * 100) / 100,
  }))

  const results = []
  let selectedData = []

  const uniqueTimes = [...new Set(data.map((item) => item.time))]

  uniqueCategories.forEach((category) => {
    uniqueTimes.forEach((time) => {
      const filteredData = roundedData.filter(
        (item) => item.demographic_category === category && item.time === time,
      )

      const result = { time, demographic_category: category }
      filteredData.forEach((item) => {
        result[item.demographic_value] = item.inclusion_value
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

  return (
    <>
      <NewHiresNav
        uniqueCategories={uniqueCategories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={plotData}
          margin={{ top: 0, right: 10, left: -38, bottom: -7 }}
        >
          <defs>
            <linearGradient id="mellow-blue" x1="0" y1="0" x2="0" y2="1">
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
            <linearGradient id="light-red" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--c-light-red)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--c-light-red)"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="bright-blue" x1="0" y1="0" x2="0" y2="1">
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
            <linearGradient id="bleachedalmond" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--c-bleachedalmond)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--c-bleachedalmond)"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="bright-blue" x1="0" y1="0" x2="0" y2="1">
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
            <linearGradient id="dark-gray" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--c-dark-gray)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--c-dark-gray)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            tick={{ fontSize: 12 }}
            stroke="var(----text-color-dark)"
            dataKey="time"
          />
          <YAxis stroke="var(----text-color-dark)" tick={{ fontSize: 12 }} />
          <Tooltip />
          {selectedCategory === 'Gender' && (
            <>
              <Area
                type="monotone"
                dataKey="Male"
                name={'Male'}
                stroke="var(--c-mellow-blue)"
                fill="url(#mellow-blue)"
                strokeWidth={2.3}
              />

              <Area
                type="monotone"
                dataKey="Female"
                name={'Female'}
                stroke="var(--c-light-red)"
                fill="url(#light-red)"
                strokeWidth={2.3}
              />
              <Area
                type="monotone"
                dataKey="Non-Binary"
                name={'Non-Binary'}
                stroke="var(--c-orange)"
                fill="url(#bleachedalmond)"
                strokeWidth={2.3}
              />
            </>
          )}

          {selectedCategory === 'Age Group' && (
            <>
              <Area
                type="monotone"
                dataKey="18-25"
                name={'18-25'}
                stroke="var(--c-mellow-blue)"
                fill="url(#mellow-blue)"
                strokeWidth={2.3}
              />
              <Area
                type="monotone"
                dataKey="26-35"
                name={'26-35'}
                stroke="var(--c-light-red)"
                fill="url(#light-red)"
                strokeWidth={2.3}
              />
              <Area
                type="monotone"
                dataKey="36-45"
                name={'36-45'}
                stroke="var(--c-orange)"
                fill="url(#orange)"
                strokeWidth={2.3}
              />
              <Area
                type="monotone"
                dataKey="46-55"
                name={'46-55'}
                stroke="var(--c-bright-blue)"
                fill="url(#bright-blue)"
                strokeWidth={2.3}
              />
              <Area
                type="monotone"
                dataKey="56+"
                name={'56+'}
                stroke="var(--c-dark-gray)"
                fill="url(#dark-gray)"
                strokeWidth={2.3}
              />
            </>
          )}

          {selectedCategory === 'Background' && (
            <>
              <Area
                type="monotone"
                dataKey="Immigrant"
                name={'Immigrant'}
                stroke="var(--c-mellow-blue)"
                fill="url(#mellow-blue)"
                strokeWidth={2.3}
              />
              <Area
                type="monotone"
                dataKey="native"
                name={'Native'}
                stroke="var(--c-light-red)"
                fill="url(#light-red)"
                strokeWidth={2.3}
              />
            </>
          )}

          {selectedCategory === 'Ethnicity' && (
            <>
              <Area
                type="monotone"
                dataKey="Majority"
                name={'Majority'}
                stroke="var(--c-mellow-blue)"
                fill="url(#mellow-blue)"
                strokeWidth={2.3}
              />
              <Area
                type="monotone"
                dataKey="Minority"
                name={'Minority'}
                stroke="var(--c-light-red)"
                fill="url(#light-red)"
                strokeWidth={2.3}
              />
            </>
          )}

          {selectedCategory === 'Sexual Orientation' && (
            <>
              <Area
                type="monotone"
                dataKey="hetero"
                name={'Hetero'}
                stroke="var(--c-mellow-blue)"
                fill="url(#mellow-blue)"
                strokeWidth={2.3}
              />
              <Area
                type="monotone"
                dataKey="LBGTQ+"
                name={'LGBTQ+'}
                stroke="var(--c-light-red)"
                fill="url(#light-red)"
                strokeWidth={2.3}
              />
            </>
          )}
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
