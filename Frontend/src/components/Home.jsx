import React from 'react'
import ImageUpload from './ImageUpload'
import How from './How'
import FAQ from './FAQ'
import HeroHome from './HeroHome'

const Home = () => {
  return (
    <div className='dark:bg-[#111827]'>
      <HeroHome/>
      <How/>
      <FAQ/>
    </div>
  )
}

export default Home