import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { media } from './helpers'
import Media from './Media'
import { Box } from 'grid-styled'
import ResponsiveThumbnail from './ResponsiveThumbnail'

const Figure = styled.figure`
  ${media.desktop`
    padding-right: 1.5em;
  `};
`

const StyledBusiness = styled.article`
  ${media.tablet`
    display: flex;
    width: 48%;
  `};
`

const Business = ({ business }) => (
  <StyledBusiness>
    <Media>
      <Media.Figure width={[1, 1, 0.33]}>
        <Figure>
          <ResponsiveThumbnail src={business.imageUrl} alt={business.name} />
        </Figure>
      </Media.Figure>
      <Media.Body>
        <h2>
          <Link to={`/detail/${business.id}`}>{business.name}</Link>
        </h2>
        <p>
          {business.city}, {business.country}
        </p>
        <Box flex="1">
          <p>{business.description}</p>
        </Box>
      </Media.Body>
      <Media.Footer>
        <Link to={`/detail/${business.id}`}>
          <Button block bsStyle="success">
            Continue
          </Button>
        </Link>
      </Media.Footer>
    </Media>
  </StyledBusiness>
)

export const businessShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.string,
})

Business.propTypes = {
  business: businessShape.isRequired,
}

export default Business
