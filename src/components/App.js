import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterButtons from './FilterButtons'
import GifContainer from './GifContainer'

//============================================================
//Formerly used React 15.6.2
//If I encounter problems, make sure to revert to that version
//============================================================

import HogCardContainer from './HogCardContainer'

class App extends Component {

  state = {
    hogs: hogs,
    filteringGreased: false,
    sortType: 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.hogs !== nextState.hogs
  }

  sortHogs = (sortType, hogsList) => {
    if (sortType === 0) {
      return hogs
    } else if (sortType === 1) {
      const newHogs = hogsList.slice()
      return newHogs.sort((a, b) => a.name.localeCompare(b.name))
    } else {
      const newHogs = hogsList.slice()
      return newHogs.sort((a, b) => b.weight - a.weight)
    }
  }

  hideHog = hog => {
    const hogIdx = this.state.hogs.findIndex(el => el.name === hog.name)
    const newHogs = this.state.hogs.slice()
    newHogs.splice(hogIdx, 1)
    this.setState({
      hogs: newHogs
    })
  }

  changeSortOption = e => {
    console.log('changing sort options')
    this.setState({
      sortType: parseInt(e.target.value)
    }, () => {
      console.log('sorting using sort type', this.state.sortType)
      this.setState({
        hogs: this.sortHogs(this.state.sortType, this.state.hogs)
      })
    })
  }

  toggleShowingGreased = e => {
    this.setState(previousState => {
      return {
        filteringGreased: !previousState.filteringGreased
      }
    }, () => {
      if (this.state.filteringGreased) {
        const newHogs = hogs.filter(h => h.greased)
        this.setState({
          hogs: newHogs
        })
      } else {
        this.setState({
          hogs: hogs
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <FilterButtons 
            toggleGreased={this.toggleShowingGreased} 
            showingGreased={this.state.filteringGreased} 
            handleSortChanged={this.changeSortOption}
          />
          <HogCardContainer hogs={this.state.hogs} handleHideHog={this.hideHog}/>
          <GifContainer />
      </div>
    )
  }
}

export default App;
