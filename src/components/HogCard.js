import React from 'react'

import fetchImage from '../fetchImage'

class HogCard extends React.Component {
    state = {
        visible: false
    }

    isHidden = () => {
        return this.state.visible ? '' : 'hider'
    }

    handleClick = event => {
        this.setState(previousState => {
            return {
                visible: !previousState.visible
            }
        })
    }

    displayInfo = () => {
        if (this.state.visible) {
            return (
                <React.Fragment>
                    <div className={"content"}>
                        <div className='meta'>Specialty: {this.props.hog.specialty}</div>
                        <div className='description'>Highest award: {this.props.hog['highest medal achieved']}</div>
                        <div className='ui basic red button' onClick={e => {
                            this.props.handleHideHog(this.props.hog)
                        }}>Hide Hog</div>
                    </div>
                    <div className={'extra content'}>
                        <span className='right floated'>Weight: {this.props.hog.weight}</span>
                        <span>Greased: {new String(this.props.hog.greased)}</span>
                    </div>
                </React.Fragment>
            )
        } else { return null}
    }

    render() {
        const attributes = {...this.props.hog}
        return (
            <div className='ui eight wide column'>
                <div className='ui card' onClick={this.handleClick}>
                    <div className='image'>
                        <img src={fetchImage(attributes.name)} ></img>
                    </div>
                    <div className='content'>
                        <div className='header'>{attributes.name}</div>
                    </div>
                    {this.displayInfo()}
                </div>
            </div>
        )
    }
}

export default HogCard