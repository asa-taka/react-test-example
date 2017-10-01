// @flow
import * as React from 'react'

type Props = {
  title: string,
  children: React.Node,
  num: number,
}

function Title(props: Props) {
  const { title, children, num } = props
  return (
    <div className="title">
      <span>#{num}: {title}</span>{children}
    </div>
  )
}

Title.defaultProps = {
  title: 'some-string',
  num: 12,
}

export default Title
