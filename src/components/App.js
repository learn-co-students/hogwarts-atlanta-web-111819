import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import MainHog from './MainHog'
import PigGif from './PigGif'



class App extends Component {


 


  render() {
    return (
      <div className="App">
          < Nav />
          <MainHog />
          <PigGif />
      </div>
    )
  }
}

export default App;
