import React from 'react'
import styled from 'styled-components'
import { Box } from 'grid-styled'
import { Button } from 'react-bootstrap'
import { media } from './helpers'
import Media from './Media'
import Wrapper from './Wrapper'
import ResponsiveThumbnail from './ResponsiveThumbnail'

const ratingToStr = (review, max) => (review ? `${review} / ${max}` : 'No reviews')

const Figure = styled.figure`
  ${media.tablet`
    padding-right: 2em;
  `};
`

const Detail = ({ business }) => (
  <Wrapper>
    <h1>2 Review</h1>

    <Media>
      <Media.Figure>
        <Figure>
          <ResponsiveThumbnail src={business.imageUrl} alt={business.name} />
        </Figure>
      </Media.Figure>

      <Media.Body>
        <h2>
          <a href={business.href} target="_blank" rel="noopener">
            {business.name}
          </a>
        </h2>
        <p>
          {business.city}, {business.country}
        </p>
        <p>{business.description}</p>
        <p>Rating: {ratingToStr(business.rating, 5)}</p>
        <Box flex="1">
          <p>Category: {business.category}</p>
        </Box>

        <a href={business.href} target="_blank" rel="noopener">
          <Button bsStyle="success" block>
            Submit
          </Button>
        </a>
      </Media.Body>
    </Media>
  </Wrapper>
)

export default Detail
