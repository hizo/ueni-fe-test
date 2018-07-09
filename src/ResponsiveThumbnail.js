import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'

const ResponsiveThumbnail = styled(Image).attrs({
  thumbnail: true,
  responsive: true,
})`
  width: 100%;
`

ResponsiveThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default ResponsiveThumbnail
