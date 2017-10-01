import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

let root
beforeEach(() => {
  root = document.createElement('div')
})

it('renders without crashing', () => {
  ReactDOM.render(<List />, root)
})

it('renders without crashing', () => {
  const items = [1, 2, 3]
  ReactDOM.render(<List items={items}/>, root)
})

it('renders without crashing', () => {
  const items = [
    { id: 1, name: 'item-a', contents: 'first-item' },
    { id: 2, name: 'item-b', contents: 'second-item' },
  ]
  const value = e => e.name
  const props = { items, value }
  ReactDOM.render(<List {...props}/>, root)
})
