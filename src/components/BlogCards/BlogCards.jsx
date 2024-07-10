import BlogCard from '../BlogCard/BlogCard'
import './BlogCards.css'
import blogs from '../../data/blogs'


function BlogCards() {

    return (
        <>
            <div className='v-100 bg-dark-08'>
                <div className='container_custom sa_blogCardsDiv'>
                    {
                        blogs.slice(0, 3).map((item) => (
                            <BlogCard
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                category={item.category}
                                likes={item.Likes}
                                like={item.liked}
                                shares={item.shares}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BlogCards