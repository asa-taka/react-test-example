// @flow
import * as React from 'react'

type Props<E> = {
  items: E[],
  itemKey: (E, ?number) => string,
  value: (E, ?number) => React.Node,
}

const List = <E>(props: Props<E>) => {
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
  value: (e, i) => e,
}

export default List
