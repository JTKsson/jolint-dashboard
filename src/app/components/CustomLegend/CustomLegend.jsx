import React from 'react'
import iconColors from '@/app/assets/iconColors'
import styles from './customLegend.module.css'

console.log(iconColors)

export default function CustomLegend(props) {
  const { selectedCategory } = props

  const getLegendData = () => {
    switch (selectedCategory) {
      case 'Gender':
        return ['Male', 'Female', 'Non-Binary']
      case 'Age Group':
        return ['18-25', '26-35', '36-45', '46-55', '56+']
      case 'Background':
        return ['Immigrant', 'Native']
      case 'Ethnicity':
        return ['Majority', 'Minority']
      case 'Sexual Orientation':
        return ['Hetero', 'LGBTQ+']
      default:
        return []
    }
  }

  const legendData = getLegendData()

  return (
    <>
      {legendData.map((entry, index) => (
        <div key={`legend-${index}`} className={styles.legendItem}>
          <div
            style={{
              width: 10,
              height: 10,
              backgroundColor: iconColors[index],
              marginRight: 5,
              borderRadius: '50%',
            }}
          />
          <span style={{ color: 'black' }}>{entry}</span>
        </div>
      ))}
    </>
  )
}
