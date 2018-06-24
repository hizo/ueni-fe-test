import React from 'react'
import { Button } from 'react-bootstrap'

const orderOpts = {
  asc: '__ascending__',
  desc: '__descending__',
}

const Sorter = ({ order, onSort }) => {
  const handleClick = () => {
    const nextOrder = order === orderOpts.asc ? orderOpts.desc : orderOpts.asc
    onSort({
      sorter: (a, b) => (nextOrder === orderOpts.desc ? a.name < b.name : a.name > b.name),
      order: nextOrder,
    })
  }

  order = order || orderOpts.desc
  return (
    <Button onClick={handleClick} block>
      Sort: {order === orderOpts.desc ? 'A-Z' : 'Z-A'}
    </Button>
  )
}

export default Sorter
