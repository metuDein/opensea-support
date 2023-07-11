import React from 'react'
import {Link} from 'react-router-dom';

const BlockList = () => {
  return (
    <>
    <ul className='block--list'>
        
        <li className='block--item'>
            <Link to={'/new-request'} className='page--link--element'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/90ed631c0103d33bbb26e856848bbf3841d07be8.png" alt="" />
            <span className='block-item-title'> Selling</span>
            </Link>
        </li>
        <li className='block--item'>
        <Link to={'/new-request'} className='page--link--element'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/01ecc9c26e47629e9204492682d19c9bc05b7eeb.png" alt="" />
            <span className='block-item-title'> Drops</span>
            </Link>
        </li>
        <li className='block--item'>
        <Link to={'/new-request'} className='page--link--element'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/4a37de6d7133b0f2d1810c459e17b8cbd7541e9b.png" alt="" />
            <span className='block-item-title'> Getting Started</span>
            </Link> 
        </li>
        <li className='block--item'>
        <Link to={'/new-request'} className='page--link--element'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/fd19315bda53c8f9f71a7f33ae5b88bf833fe725.png" alt="" />
            <span className='block-item-title'> Buying</span>
            </Link>
        </li>
        <li className='block--item'>
        <Link to={'/new-request'} className='page--link--element'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/dea3bb55fa6310dabd150e6ee230e2f6c158c0a1.png" alt="" />
            <span className='block-item-title'> Creating</span>
            </Link>
        </li>
        <li className='block--item'>
        <Link to={'/new-request'} className='page--link--element'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/397feb7c8fd0537a77e02b0c79e65dbea4847411.png" alt="" />
            <span className='block-item-title'> User Content</span>
            </Link>
        </li>
        <li className='block--item'>
        <Link to={'/new-request'} className='page--link--element'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/23d8d77643f2c3e4921c5836de0dbf24e55c8b05.png" alt="" />
            <span className='block-item-title'> FAQ</span>
            </Link>
        </li>
        <li className='block--item'>
        <Link to={'/new-request'} className='page--link--element'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/d4182d8be5fb73eff98ff3a44c85b8cb1b9df118.png" alt="" />
            <span className='block-item-title'> User Safety</span>
            </Link>
        </li>
        <li className='block--item'>
            <Link to={'/new-request'} className='page--link--element'>
            <img src="https://theme.zdassets.com/theme_assets/10680073/6b2d329e1919d7438b5d3dd174396e59892a25c1.png" alt="" />
            <span className='block-item-title'> Developers</span>
            </Link>
        </li>
    </ul>
    </>
  )
}

export default BlockList