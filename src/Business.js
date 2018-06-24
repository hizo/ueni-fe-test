import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Business = ({ business }) => (
  <article>
    <img src={business.imageUrl} alt={business.name} />
    <h2>
      <a href={business.href} target="_blank" rel="noopener">
        {business.name}
      </a>
    </h2>
    <p>
      {business.city}, {business.country}
    </p>
    <p>{business.description}</p>
    <Link to={`/detail/${business.id}`}>
      <Button block bsStyle="success">
        Continue
      </Button>
    </Link>
  </article>
)

export default Business
