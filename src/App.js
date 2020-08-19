import './App.css';

import { makeFakeTensor } from './fakeTensor';
import React from 'react';

import logo from './logo.svg';

function App() {
  const tensorInstance = makeFakeTensor([5, 6, 7, 9]);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {tensorInstance.dataSync()}
        </p>
      </header>
    </div>
  );
}

export default App;
