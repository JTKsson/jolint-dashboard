import CustomLegend from '../CustomLegend/CustomLegend'
import styles from './newHiresCard.module.css'

export default function NewHiresNav(props) {
  const { uniqueCategories, selectedCategory, handleCategoryChange } = props

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h2>Inclusion of new-hires</h2>
      </div>
      <div className={styles.navItems}>
        <div className={styles.legend}>
          <CustomLegend
            className={styles.legend}
            selectedCategory={selectedCategory}
          />
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
        </div>
      </div>
    </nav>
  )
}
