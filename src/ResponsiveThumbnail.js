import styled from 'styled-components'
import { Image } from 'react-bootstrap'

const ResponsiveThumbnail = styled(Image).attrs({
  thumbnail: true,
  responsive: true,
})`
  width: 100%;
`

export default ResponsiveThumbnail
