import React from 'react'

const List = props => {
  const { items, itemKey, value } = props
  return (
    <ul>
      {items.map((e, i) => (
        <li key={itemKey(e, i)}>{value(e)}</li>
      ))}
    </ul>
  )
}

List.defaultProps = {
  items: [],
  itemKey: (e, i) => i,
  value: e => e,
}

export default List
