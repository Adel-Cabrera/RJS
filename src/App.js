import React, { Component } from 'react';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'

class App extends Component {
  render(){
  return (
    <div className="App">
      < Greet name = "Adel" heroName = "Darkonnen" >
      <p> This is children props </p>
      </Greet>
      < Greet name = "Adel" heroName = "Darkonnen" />
      < Welcome name = "Adel" heroName = "Darkonnen"/>
      < Hello />
    </div>
  );
  }
}

export default App;
