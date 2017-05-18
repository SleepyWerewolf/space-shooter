import React, { Component } from 'react';
import { Unity } from 'react-unity-webgl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Unity src="Build/space-shooter.json" />
      </div>
    );
  }
}

export default App;
