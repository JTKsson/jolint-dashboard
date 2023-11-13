import styles from './newHiresCard.module.css'

export default function NewHiresNav(props) {
  const { uniqueCategories, selectedCategory, handleCategoryChange } = props

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
      </div>
    </nav>
  )
}
