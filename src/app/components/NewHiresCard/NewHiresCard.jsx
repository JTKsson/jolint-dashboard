'use client'
import React, { useState } from 'react';
import data from '../../assets/newHiresData.json';

export default function NewHiresCard() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique demographic categories
  const uniqueCategories = [...new Set(data.map(item => item.demographic_category))];

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <label htmlFor='categorySelect' />
      <select
        id='categorySelect'
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Select a category</option>
        {uniqueCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}