import React from 'react';
import logo from './logo.svg';
import './App.css';

import * as bodyPix from '@tensorflow-models/body-pix';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs-core';

async function loadBodyPix()
{
  console.log("Starting load");
  bodyPix.load({
    architecture: 'MobileNetV1',
    outputStride: 16,
    multiplier: 0.5,
    quantBytes: 1
  }).then((bodypix) => {
    console.log("TF load complete, setting state");
    //this.setState({tensorFlow: bodypix, processVideo: true});
  });
}

function App() {
  loadBodyPix();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
