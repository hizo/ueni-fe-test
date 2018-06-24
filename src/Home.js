import React, { Component } from 'react'
import Business from './Business'
import Sorter from './Sorter'
import CategoryFilter from './CategoryFilter'

class Home extends Component {
  render() {
    const { businesses, getCategoryFilterProps, getSorterProps } = this.props
    return (
      <section>
        <h1>1 Select your business</h1>
        <Sorter {...getSorterProps()} />
        <CategoryFilter {...getCategoryFilterProps()} />
        {businesses.map(business => (
          <Business business={business} key={`business_${business.id}`} />
        ))}
      </section>
    )
  }
}

export default Home
