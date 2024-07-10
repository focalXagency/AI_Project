import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import FeaturedVideos from '../components/FeaturedVideos/FeaturedVideos'
import Posts from '../components/Posts/Posts'
import PopularBlog from '../components/PopularBlog/PopularBlog'
import BlogCards from '../components/BlogCards/BlogCards'


function News() {
  return (
    <div>
      <PageTitle
        title1="Today's Headlines: Stay"
        title2="Informed"
        summary="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage." />
      <PopularBlog />
      <BlogCards />
      <Posts />
      <FeaturedVideos />
    </div>
  )
}

export default News