import React from 'react'

const ratingToStr = (review, max) => (review ? `${review} / ${max}` : 'No reviews')

const Detail = ({ business }) => {
  return (
    <section>
      <h1>2 Review</h1>

      <img src={business.imageUrl} alt={business.name} />
      <h2>{business.name}</h2>
      <p>
        {business.city}, {business.country}
      </p>
      <p>{business.description}</p>
      <p>Rating: {ratingToStr(business.rating, 5)}</p>
      <p>Category: {business.category}</p>
    </section>
  )
}

export default Detail
