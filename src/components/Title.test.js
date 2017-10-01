// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';

const render = Component => {
  ReactDOM.render(Component, document.createElement('div'))
}

it('renders without crashing', () => {
  render(<Title />)
})
