import React from 'react'
import './SearchResList.css'

export const SearchResList = ({ results }) => {
    // Now `results` is the array
    return (
      <div className='res-list'>
        {results.map((result) => (
          <div key={result.id} className='res-item'>
            {result.name}
          </div>
        ))}
      </div>
    )
  }