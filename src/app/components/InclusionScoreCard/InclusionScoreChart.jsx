'use client'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

export default function ChartComponent({ data, selectedTeam }) {
  const getCompanyAverageData = (data, selectedTeam) => {
    const uniqueMonths = new Set()
    const allMonths = [
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    const companyAverageData = data
      .filter((item) => item.Team === selectedTeam)
      .reduce((acc, item) => {
        const month = item.Month

        if (!month || month.trim() === '' || uniqueMonths.has(month)) {
          return acc
        }

        uniqueMonths.add(month)

        const roundedScore = Math.ceil(item['Inclusion score'])

        const existingIndex = acc.findIndex(
          (dataItem) => dataItem.Month === month,
        )

        if (existingIndex !== -1) {
          acc[existingIndex]['Company Average'] = roundedScore
        } else {
          acc.push({
            Month: month,
            'Company Average': roundedScore,
          })
        }

        return acc
      }, [])

    const filledCompanyAverageData = allMonths.map((month) => {
      const existingData = companyAverageData.find(
        (item) => item.Month === month,
      )
      return existingData || { Month: month, 'Company Average': 0 }
    })

    return filledCompanyAverageData
  }

  const mapDataToInclusionScores = () => {
    const filteredData = selectedTeam
      ? data.filter((item) => item.Team === selectedTeam)
      : data

    return filteredData.map((item) => ({
      Month: item.Month,
      'Inclusion score': Math.floor(item['Inclusion score']),
      Benchmark: item.Benchmark,
    }))
  }

  const mappedData = mapDataToInclusionScores()
  const companyAverageData = getCompanyAverageData(data, 'Company average')

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={mappedData}
        strokeWidth={0}
        margin={{ top: 0, right: 8, left: -32, bottom: -11 }}
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
        <XAxis
          dataKey="Month"
          stroke="var(--text-color-dark)"
          tick={{ fontSize: 12 }}
        />
        <YAxis
          dataKey="Inclusion score"
          type="number"
          domain={[0, 100]}
          stroke="var(--text-color-dark)"
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Company Average"
          stroke="var(--c-mellow-blue)"
          fill="url(#colorPv)"
          strokeWidth={2.3}
          data={companyAverageData}
          isAnimationActive={false}
        />
        <Area
          type="monotone"
          dataKey="Inclusion score"
          stroke="var(--c-bright-blue)"
          fill="url(#colorUv)"
          strokeWidth={2.3}
          isAnimationActive={false}
        />
        <Area
          type="monotone"
          dataKey="Benchmark"
          stroke="var(--c-light-red)"
          fill="transparent"
          strokeWidth={2.3}
          strokeDasharray="4 4"
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
