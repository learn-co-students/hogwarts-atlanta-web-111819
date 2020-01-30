import React from 'react'

export default class Sort extends React.Component{
    handleClick=(e)=>{
        this.props.onHandleSort(e.target.value)
    }

    render(){
        return(
            <div>
                <select onChange={this.handleClick}>
                    <option></option>
                    <option value="all">All</option>
                    <option value='name'>Name</option>
                    <option value='weight'>Weight</option>
                </select>
            </div>
        )
    }
}