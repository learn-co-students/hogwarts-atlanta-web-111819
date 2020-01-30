import React from 'react'
import Pig from './Pig'
import { readdirSync } from 'fs';

class PigContainer extends React.Component{


    renderPigs=()=>{
        return this.props.pigs.map(pig => {
            return <Pig name={pig.name} specialty={pig.specialty} weight={pig.weight} medal={pig['highest medal achieved']}/>
        })
        
    }

    




    render(){
        return(
            <div>
                <div className='ui grid container cards'>
                    {this.renderPigs()}
                </div>
            </div>
        )
    }
}

export default PigContainer