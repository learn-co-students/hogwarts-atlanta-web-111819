import React from 'react'

export default class Pig extends React.Component{

    constructor(){
        super()
        this.state = {
            info: false
        }
    }

    handleClick=(e)=>{
        this.setState(prevState=>{
            return {
                info: !prevState.info
            }
        })
    }

    getImageLink=(name)=>{
        let temp = name.toLowerCase()
        return temp.replace(/\s+/g, '_') + '.jpg'
    }

    renderInfo=()=>{
        if(this.state.info === false){
            return(
                <div>
                    <div className='image'>
                    <img src={require(`../hog-imgs/${this.getImageLink(this.props.name)}`)}/>
                    </div>
                    <div className='content'>
                        <h4 className='header'>{this.props.name}</h4>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <h3>{this.props.name}</h3>
                    <p>Weight: {this.props.weight}</p>
                    <p>Specialty: {this.props.specialty}</p>
                </div>
            )
        }
    }
    render(){
        return(
            <div className='ui card' onClick={this.handleClick}>
                {this.renderInfo()}
            </div>
        )
    }
}