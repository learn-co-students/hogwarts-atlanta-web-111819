import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer'
import Filter from './Filter'
import Sort from './Sort'

class App extends Component {
  state = {
    pigs: hogs,
    filter: false,
    sort: 'all'
  }


  onHandleFilter=()=>{
    this.setState(prevState=>{
        return {
            filter: !prevState.filter
        }
    })
  }

  compare=(key)=>{
    let innerSort=(a,b)=>{
        let varA = a[key]
        let varB = b[key]

        let comparison = 0
        if(varA>varB){
            comparison = 1
        }else if (varA<varB){
            comparison = -1
        }
        return comparison
    }
    return innerSort
}

  sortPigs=(value)=>{
    console.log(value)
    this.setState({
      sort: value
    })

  }

  sendPigs=()=>{
    if(this.state.sort !== 'all'){
      if(this.state.filter === true){
        return this.state.pigs.filter(pig => pig.greased === true).slice().sort(this.compare(this.state.sort))
      }else{
        return this.state.pigs.slice().sort(this.compare(this.state.sort))
      }
    }else{
      if(this.state.filter === true){
        return this.state.pigs.filter(pig => pig.greased === true)
      }else{
        console.log('wtf')
        return this.state.pigs
      }
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <div>
            <Filter onHandleFilter={this.onHandleFilter}/>
            <Sort onHandleSort={this.sortPigs} sort={this.state.sort}/>
          </div>
          <PigContainer pigs={this.sendPigs()}/>

      </div>
    )
  }
}

export default App;
