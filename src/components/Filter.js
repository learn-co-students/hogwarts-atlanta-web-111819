import React from 'react'

export default class Filter extends React.Component{

    handleClick=(e)=>{
        this.props.onHandleFilter()
    }

    render(){
        return(
            <button onClick={this.handleClick}>Filter</button>
        )
    }
}