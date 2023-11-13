import CustomLegend from '../CustomLegend/CustomLegend'
import styles from './differencesCard.module.css'

export default function DifferencesNav(props) {
  const { uniqueCategories, selectedCategory, handleCategoryChange } = props

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h1>Differences</h1>
      </div>
      <div className={styles.navItems}>
        <div className={styles.legend}>
          <CustomLegend selectedCategory={selectedCategory} />
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
          </div>
        </div>
      </div>
    </nav>
  )
}
