import React, { Component } from 'react'

export default class PigGif extends Component {

    state = {
        gif: []
    }

    fetchGif = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=funny&api_key=HJtM6YGPL8CjxlAqDFav5zAobYjXStvC&rating=g`)
        .then(res => res.json()).then(data => {
            let gifArray = data.data.map(gif => {
                // console.log(gif.images.downsized_large.url)
                return gif.images.original.url
            }
            )

            this.setState({
                gif: gifArray
            })
        })
    }


    renderGif = () => {
        console.log('----------------something==============');
        // this.setState({pageGif: []}) 
    return this.state.gif.map(gif => {
        // console.log(gif)
    return<img className="ui medium circular image" src={gif} alt='gif'/>
})
    }

    render() {
        return (
            <div className="ui big images">
                {this.state.gif.length < 1 ? this.fetchGif() : this.renderGif()}
            </div>
        )
    }
}
