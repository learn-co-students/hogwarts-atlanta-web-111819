import React, { Component } from 'react'
// import HandleCli/ck from './HandleClick'


export default class Hogs extends Component {

    hide = (e) => {
        e.target.parentElement.remove()
    }
  


    renderHogs = () => {
        let hogDateFilter = this.props.filter ?   this.props.hogs.filter(hog => hog.greased === true) : this.props.hogs
        let sortHog
        console.log(this.props.sort);
        
        if(this.props.sort === 'None'){
            sortHog = hogDateFilter
        }else if(this.props.sort === 'Name'){
            sortHog = hogDateFilter.sort((a,b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            } );
        }else if(this.props.sort === 'Weight'){
            sortHog = hogDateFilter.sort((a,b) => {return a.weight - b.weight})
        }

        console.log(sortHog);
        

// <div className='pigTile' >
//                 <h4 id={hog.name} onClick={this.props.handleRemove}>❌</h4>
//                 <h2>{hog.name}</h2>
//                 <img src={img} alt={hog.name}  onClick={this.props.handleInfo} id={hog.name}/>
//                 <h3>{hog.specialty}</h3>
//                 <h3>{hog.weight}</h3>
//                 <h3>{hog['highest medal achieved']}</h3>
//                 </div>


        return sortHog.map(hog => {
            var lowCaseHog = hog.name.toLowerCase()
            var img = require('../hog-imgs/'+lowCaseHog.replace(/\s/g, "_") + '.jpg')

            if(this.props.currentHog === hog.name){
            return <div className="ui card">
            <div className="image">
            <h4 id={hog.name} onClick={this.props.handleRemove}>❌</h4>
            <img src={img} alt={hog.name}  onClick={this.props.handleInfo} id={hog.name}/>
            </div>
            <div className="content">
              <a className="header">{hog.name}</a>
              <div className="meta">
                <span className="date">{hog.specialty}</span>
              </div>
              <div className="description">
                {hog.weight}
              </div>
              <div className="description">
                Greased : {hog.greased? 'True' : 'False'}
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                {hog['highest medal achieved']}
              </a>
            </div>
          </div>
            }else{
                return <div className="ui card">
                <div className="image">
                <img src={img} alt={hog.name}  onClick={this.props.handleInfo} id={hog.name}/>
                </div>
                <div className="content">
                  <a className="header">{hog.name}</a>
                </div>
              </div>
            }
        })
        
    }

    render() {
        return (
            <div className='ui link cards'>
                {this.renderHogs()}
            </div>
        )
    }
}
