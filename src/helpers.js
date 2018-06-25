import { css } from 'styled-components'

// helper function to average values in array, fixed to 1 decimal place
export const average = arr =>
  (arr.reduce((totalVal, num) => totalVal + num) / arr.length).toFixed(1)

// helper function to transform reviews to score map:
// {
//   "business_id": [score1, score2, score3]
// }
export const transformReviewsToScoreMap = reviewsData =>
  Object.values(reviewsData).reduce((acc, reviews) => {
    reviews.forEach(review => {
      if (!acc[review.business_id]) {
        acc[review.business_id] = []
      }
      acc[review.business_id].push(review.score)
    })
    return acc
  }, {})

// helper for media queries
const sizes = {
  desktop: 832,
  tablet: 640,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})
