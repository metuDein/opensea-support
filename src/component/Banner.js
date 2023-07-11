import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Banner = () => {
  const navigate  = useNavigate()
const handleSearch = () => {
  navigate('/new-request');
}

  return (
    <>
        <div className='banner--section'>
            <form onSubmit={handleSearch}>
                <div className='search--input'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" focusable="false" viewBox="0 0 12 12" className="search--icon" aria-hidden="true">
      <circle cx="4.5" cy="4.5" r="4" fill="none" stroke="currentColor"></circle>
      <path stroke="currentColor" stroke-linecap="round" d="M11 11L7.5 7.5"></path>
    </svg>
                    <input type="text" placeholder='Search'/>
                </div>
            </form>
        </div>
    </>
    
  )
}

export default Banner