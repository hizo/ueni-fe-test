import React from 'react'
import { MenuItem, Dropdown } from 'react-bootstrap'

const CategoryFilter = ({ defaultCategory, selectedCategory, categories, onSelect }) => (
  <Dropdown id="category-filter" block vertical>
    <Dropdown.Toggle block>{`Category: ${selectedCategory}`}</Dropdown.Toggle>
    <Dropdown.Menu>
      <MenuItem eventKey={defaultCategory} onSelect={onSelect}>
        {defaultCategory}
      </MenuItem>
      {categories.map((category, index) => (
        <MenuItem
          key={`category_${category.toLowerCase()}_${index}`}
          eventKey={category}
          onSelect={onSelect}>
          {category}
        </MenuItem>
      ))}
    </Dropdown.Menu>
  </Dropdown>
)

export default CategoryFilter
