import React from 'react'
import {  } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

const Nav = ({success, errMsg, msg}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-request');
  }
  return (

    <header>
    <nav className='navbar'>
        <div className='img--sect'>
          <Link to={'/'} className='nav--link'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/a24892bb2e28dcd028d0fe2dff1d806c7a4ff923.png" alt='logo'/>
          </Link>
        </div>
        <div className='nav--btn'>
            <button onClick={handleClick}> contact us </button>
        </div>
    </nav>
    <div className={`success--tag ${success && !errMsg ? 'visible' : ''}`}>
      <img src="data:image/png;base64,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" /> 
      <p>{msg}</p>
    </div>
    <div className={`success--tag ${errMsg && !success ? 'visible--err' : ''}`}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCF3jAL2nQ1pJEe6knNKRwZROh6FLhm-I78Q&usqp=CAU" /> 
      <p>{msg}</p>
    </div>
    </header>
  )
}

export default Nav