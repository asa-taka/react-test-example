import React from 'react'

const Title = props => {
  const { title, children } = props
  return (
    <div className="title">
      <div>{title}</div>
      {children}
    </div>
  )
}

Title.defaultProps = {
  title: ''
}

export default Title
