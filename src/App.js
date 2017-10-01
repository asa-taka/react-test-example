// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Title, List } from './components'

type Item = {
  id: number,
  name: string,
  content: string,
}

const items: Item[] = [
  { id: 1, name: 'item-a', content: 'some some' },
  { id: 2, name: 'item-b', content: 'some some' },
]

class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Title title="somesom" num={12}>good title</Title>
        <List items={items} value={e => e.id}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
