import React from 'react'

const FormOne = ({item, handleCheckState}) => {
  return (
                    <li className='complaint--opt'>
                            <label htmlFor={`radio--opt--${item.id}`} className='radio' > 
                                <input type="radio" name='firstform' onChange={() => handleCheckState(item.id)} checked={item.checked} id={`radio--opt--${item.id}`}/> 
                                <span className={`outer ${item.checked ? '' : ''}`}></span> 
                                {item.title}
                            </label>
                        </li>
  )
}

export default FormOne