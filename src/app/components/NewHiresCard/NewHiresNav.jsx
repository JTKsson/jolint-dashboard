import styles from './newHiresCard.module.css'

export default function NewHiresNav(props) {
  const {
    uniqueCategories,
    selectedCategory,
    handleCategoryChange,
    uniqueMetrics,
    selectedMetric,
    handleMetricChange,
  } = props

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h1>Inclusion of new-hires</h1>
      </div>
      <div className={styles.dropdown}>
        <label htmlFor="categorySelect" />
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label htmlFor="metricSelect" />
        <select
          id="metricSelect"
          value={selectedMetric}
          onChange={handleMetricChange}
        >
          {uniqueMetrics.map((metric, index) => (
            <option key={index} value={metric}>
              {metric}
            </option>
          ))}
        </select>
      </div>
    </nav>
  )
}
