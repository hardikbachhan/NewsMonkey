import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export class App extends Component {

  name = "hardik";   // keywords are not required while instantiating variables inside class here.

  render() {        // render is a life cycle method
    return (
      <div>
        <Navbar />
        <h1>This is my first class based component {this.name} .</h1>
        <News />
      </div>
    )
  }
}

export default App;
