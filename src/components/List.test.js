import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const items = [1, 2, 3]
  ReactDOM.render(<List items={items}/>, div);
});
