import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.allHogs}>All Hogs</button>
                <button onClick={this.props.handleClick}>Greased</button>

                <select onChange={this.props.handleSelect}>
                    <option value="None">None</option>
                    <option value="Weight">Weight</option>
                    <option value="Name">Name</option>
                    {/* <option value="audi">Audi</option> */}
                </select>
            </div>
        )
    }
}
