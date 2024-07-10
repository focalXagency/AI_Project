import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import PodcastEpisodes from '../components/PodcastEpisodes/PodcastEpisodes'
import ProdcastSectionCards from '../components/ProdcastSectionCards/ProdcastSectionCards'

function Podcasts() {
  return (
    <div>
      <PageTitle
        title1="Unlock the World of Artificial Intelligence "
        title2=" Podcasts"
        title3="through"
        title4="through"
        summary="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation." />
        <ProdcastSectionCards/>
        <PodcastEpisodes />
    </div>
  )
}

export default Podcasts