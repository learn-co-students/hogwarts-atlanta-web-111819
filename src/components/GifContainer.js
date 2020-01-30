import React from 'react'
import fetchImage from '../fetchImage'
import apiKey from '../apiKey'

class GifContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=pig&api_key=${apiKey}&rating=g`)
            .then(res => res.json())
            .then(data => {
                const gifList = data.data.map(g => {
                    return g.images.original.url
                })
                this.setState({
                    gifs: gifList
                })
            })
    }

    render() {
        return (
            <div className='ui segment'>
                <h1 className='ui title'>Gifs</h1>
                {
                    this.state.gifs.map(g => {
                        return <img src={g} className='ui image'></img>
                    })
                }
            </div>
        )
    }
}

export default GifContainer