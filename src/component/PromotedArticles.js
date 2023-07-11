import React from 'react'
import { Link } from 'react-router-dom'

const PromotedArticles = () => {
  return (
    <section className='promoted--articles'>
        <h2 className='promoted--title'>Promoted articles</h2>
        <ul className='article-list'>
        <li class="article--list--item">
        <Link to={'/new-request'} className='a'>
                  How do I sell an NFT?
                </Link>
            </li>
            <li className='article--list--item'> <Link to={'/new-request'} className='a'>How do create an OpenSea account?</Link></li>
            <li className='article--list--item'> <Link to={'/new-request'} className='a'>What crypto wallet can I use with opensea ? </Link></li>
            <li className='article--list--item'><Link to={'/new-request'} className='a'>How do I sweep a collection ?</Link></li>
            <li className='article--list--item'> <Link to={'/new-request'} className='a'>How do I create an NFT?</Link></li>
        </ul>
    </section>
  )
}

export default PromotedArticles