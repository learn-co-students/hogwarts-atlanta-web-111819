import React, { Component } from 'react'
import Hogs from './Hogs'
import hogsList from '../porkers_data';
import Sort from './Sort'

export default class MainHog extends Component {


    

    state = {
        hogs: hogsList,
        filter: false,
        sort: 'None',
        currentHog: ''
    }


    allHogs = (e) => {
        this.setState({
            hogs: hogsList
        })
    }


    handleInfo = (e) => {
        console.log(e.target);
        if(e.target.id === this.state.currentHog){
            this.setState({
                currentHog: ''
            })
        }else{
            this.setState({
                currentHog: e.target.id
            })
        }
    }

    handleClick = (e) => {
        this.setState(prevState => ({
            filter: !prevState.filter
        }))
        console.log(this.state.filter);
        
      }
    
    handleSelect = (e) => {
        // console.log(e.target.value);
        this.setState({
            sort: e.target.value
        })
        // console.log(this.state.sort);
        
      }


      read = () => {
          console.log(this.state);
          
      }


      handleRemove = (e) => {
          console.log(e.target.id);
          let newHog = this.state.hogs.filter(hog => hog.name !== e.target.id)
          console.log(newHog);
          
          this.setState({
            hogs: newHog
          })
          
      }

    render() {
        return (
            <div>
                {this.read()}
                <Sort allHogs={this.allHogs} handleClick={this.handleClick} handleSelect={this.handleSelect}/>
                <Hogs handleRemove={this.handleRemove} currentHog={this.state.currentHog} handleInfo={this.handleInfo} hogs={this.state.hogs} filter={this.state.filter} sort={this.state.sort}/>
            </div>
        )
    }
}
