import React from 'react'

function FilterButtons(props) {
    return (
        <div className='ui segment'>
          <button 
            className={`ui button ${props.showingGreased ? 'active' : ''}`}
            onClick={props.toggleGreased}
            >
              Show Only Greased Hogs
            </button>
            Sort by: 
            <select className='ui dropdown' onChange={props.handleSortChanged}>
                <option value='0'>None</option>
                <option value='1'>Name</option>
                <option value='2'>Weight</option>
            </select>
        </div>
    )
}

export default FilterButtons