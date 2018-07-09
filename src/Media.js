import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

const StyledBody = styled(Flex)`
  height: 100%;
`

const StyledFooter = styled(Box)`
  width: 100%;
`

class Media extends React.Component {
  static Figure = function Figure({ width, children }) {
    return <Box width={width || [1, 0.5, 0.5]}> {children}</Box>
  }
  static Body = function Body({ children }) {
    return (
      <Box width={[1, 0.5, 0.5]} flex="1">
        <StyledBody flexDirection="column">{children}</StyledBody>
      </Box>
    )
  }
  static Footer = function Footer({ children }) {
    return <StyledFooter alignSelf="flex-end">{children}</StyledFooter>
  }

  render() {
    return (
      <Flex flexWrap="wrap" mt={4}>
        {this.props.children}
      </Flex>
    )
  }
}

export default Media
