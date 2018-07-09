import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import businesses from './businesses-data'
import reviewsData from './reviews-data'
import { average, transformReviewsToScoreMap } from './helpers'

const scores = transformReviewsToScoreMap(reviewsData)
const businessesWithRatings = businesses.map(business => ({
  ...business,
  rating: scores[business.id] ? average(scores[business.id]) : null,
}))

class App extends Component {
  defaultCategory = 'All'

  state = {
    businesses: businessesWithRatings,
    selectedCategory: this.defaultCategory,
  }

  onCategorySelect = category => {
    this.setState(
      state => (state.selectedCategory !== category ? { selectedCategory: category } : null),
    )
  }

  categoryFilterPropGetter = () => ({
    categories: this.state.businesses.reduce(
      // filter duplicate categories
      (categories, business) =>
        categories.includes(business.category) ? categories : [...categories, business.category],
      [],
    ),
    defaultCategory: this.defaultCategory,
    selectedCategory: this.state.selectedCategory,
    onSelect: this.onCategorySelect,
  })

  onSort = ({ sorter, order }) => {
    this.setState({
      businesses: this.state.businesses.sort(sorter),
      order,
    })
  }

  sorterPropsGetter = () => ({
    order: this.state.order,
    onSort: this.onSort,
  })

  render() {
    const { businesses, selectedCategory } = this.state
    return (
      <Router>
        <React.Fragment>
          <Route
            exact
            path="/"
            component={() => (
              <Home
                businesses={businesses.filter(
                  business =>
                    selectedCategory === this.defaultCategory ||
                    business.category === selectedCategory,
                )}
                getCategoryFilterProps={this.categoryFilterPropGetter}
                getSorterProps={this.sorterPropsGetter}
              />
            )}
          />
          <Route
            path="/detail/:id"
            render={props => {
              const {
                match: {
                  params: { id },
                },
              } = props
              const business = businesses.find(business => business.id === parseInt(id, 10))
              return <Detail business={business} {...props} />
            }}
          />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
