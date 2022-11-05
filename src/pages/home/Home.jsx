import React from 'react'
import Posts from '../../compnents/posts/Posts'
import Stories from '../../compnents/stories/Stories'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home