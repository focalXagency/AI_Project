import React from 'react'
import Hero from '../components/Hero/Hero'
import ReelWords from '../components/ReelWords/ReelWords'
import FutureTechFeatures from '../components/FutureTechFeatures/FutureTechFeatures'
import InterActions from '../components/InterActions/InterActions'
import Posts from '../components/Posts/Posts'
import FutureTechResources from '../components/FutureTechResources/FutureTechResources'

function Home() {
  return (
    <>
      <Hero />
      <FutureTechFeatures />
      <FutureTechResources />
      <Posts />
      <ReelWords />
    </>
  )
}

export default Home