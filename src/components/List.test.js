// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const render = Component => {
  ReactDOM.render(Component, document.createElement('div'))
}

it('renders without crashing', () => {
  render(<List />)
})

it('renders without crashing', () => {
  const items = [1, 2, 3]
  render(<List items={items} />)
})

it('renders without crashing', () => {
  const items = [
    { id: 1, name: 'item-a', contents: 'first-item' },
    { id: 2, name: 'item-b', contents: 'second-item' },
  ]
  render(<List items={items} value={e => e.name} />)
})

it('renders without crashing', () => {
  type Item = { id: number, name: string, contents: string }
  const items: Item[] = [
    { id: 1, name: 'item-a', contents: 'first-item' },
    { id: 2, name: 'item-b', contents: 'second-item' },
  ]
  render(<List items={items} value={e => e.name} />)
})
