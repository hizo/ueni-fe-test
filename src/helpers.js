// helper function to average values in array, fixed to 1 decimal place
export const average = arr =>
  (arr.reduce((totalVal, num) => totalVal + num) / arr.length).toFixed(1)

// helper function to transform reviews to structure:
// {
//   "business_id": [score1, score2, score3]
// }
export const transformReviews = reviewsData =>
  Object.values(reviewsData).reduce((acc, reviews) => {
    reviews.forEach(review => {
      if (!acc[review.business_id]) {
        acc[review.business_id] = []
      }
      acc[review.business_id].push(review.score)
    })
    return acc
  }, {})
