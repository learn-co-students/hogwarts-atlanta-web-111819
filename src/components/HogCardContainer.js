import React from 'react'
import HogCard from './HogCard'

function HogCardContainer(props) {
    return (
        <div className='ui grid container cards'>
            {
                props.hogs.map(h => {
                    return <HogCard hog={h} handleHideHog={props.handleHideHog}/>
                })
            }
        </div>
    )
}

export default HogCardContainer