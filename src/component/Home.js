import React from 'react'
import Banner from './Banner'
import BlockList from './BlockList'
import PromotedArticles from './PromotedArticles';

const Home = () => {
  return (
    <>
        <Banner />
        <BlockList />
        <PromotedArticles />
    </>
  )
}

export default Home