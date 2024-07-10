import React from 'react'
import { useParams } from 'react-router-dom'
import BlogHero from '../components/BlogHero/BlogHero';
import BlogDetails from '../components/BlogDetails/BlogDetails';
import blogs from '../data/blogs';
import BlogCards from '../components/BlogCards/BlogCards';

function BlogOpen() {
  const { id } = useParams();
  const item = blogs[id - 1];

  return (
    <div>
      <BlogHero
        img={item.img}
        title={item.title}
      />
      <BlogDetails
        item={item}
      />
      <BlogCards />
    </div>
  )
}

export default BlogOpen