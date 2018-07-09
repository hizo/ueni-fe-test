import React from 'react'
import PropTypes from 'prop-types'
import Business from './Business'
import Sorter from './Sorter'
import CategoryFilter from './CategoryFilter'
import Wrapper from './Wrapper'
import { Flex, Box } from 'grid-styled'

const Home = ({ businesses, getCategoryFilterProps, getSorterProps }) => (
  <Wrapper>
    <h1>1 Select your business</h1>
    <Flex justifyContent="flex-end" mt={4}>
      <Box width={[1, 0.48]}>
        <Flex flexWrap="wrap" justifyContent="space-between">
          <Box width={[1, 0.3]}>
            <Sorter {...getSorterProps()} />
          </Box>
          <Box width={[1, 0.65]} mt={[2, 0]}>
            <CategoryFilter {...getCategoryFilterProps()} />
          </Box>
        </Flex>
      </Box>
    </Flex>

    <Flex flexWrap="wrap" justifyContent="space-between">
      {businesses.map(business => <Business business={business} key={`business_${business.id}`} />)}
    </Flex>
  </Wrapper>
)

Home.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCategoryFilterProps: PropTypes.func.isRequired,
  getSorterProps: PropTypes.func.isRequired,
}

export default Home
