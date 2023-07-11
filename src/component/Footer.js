import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer--info'>
        <div className='footer'>
            <div className='footer--details'>
                <span className='span--img'>
                    <img src="https://opensea.io/static/images/logos/opensea-white.svg" alt="" />
                </span>
            <h3>OpenSea</h3>
            <p>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
            </div>
            <div className='useful-link-row'>
                <div className='footer-col-1'>
                    <h3>Resources</h3>
                    <ul>
                        <li><Link to={'/new-request'} className='a foot'>Learn</Link></li>
                        <li><Link to={'/new-request'} className='a foot'>Help Center</Link></li>
                        <li><Link to={'/new-request'} className='a foot'>Platform Status </Link></li>
                        <li> <Link to={'/new-request'} className='a foot'>Partners </Link></li>
                        <li><Link to={'/new-request'} className='a foot'>Blog </Link></li>
                        <li><Link to={'/new-request'} className='a foot'>Docs </Link></li>
                        <li><Link to={'/new-request'} className='a foot'>Newsletter</Link></li>
                    </ul>
                </div>
                <div className='footer-col-1'>
                    <h3>Company</h3>
                    <ul>
                        <li> <Link to={'/new-request'} className='a foot'>About </Link></li>
                        <li> <Link to={'/new-request'} className='a foot'>Careers </Link></li>
                        <li><Link to={'/new-request'} className='a foot'>Ventures</Link></li>
                        <li><Link to={'/new-request'} className='a foot'>Grants </Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footer--row-2'>
            <p>&copy;2018 - {new Date().getFullYear()} Ozone Networks, Inc</p>
            <div>
                <span><Link to={'/new-request'} className='a foot'>Privacy Policy</Link></span>
                <span className='foot-span-col-2'><Link to={'/new-request'} className='a foot'>Terms of Services</Link></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer