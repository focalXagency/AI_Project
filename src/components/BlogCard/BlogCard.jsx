import './BlogCard.css'
import { Link } from 'react-router-dom'
import InterActions from './../InterActions/InterActions'
import arrow from './../../assets/icons/arrow.svg'


function BlogCard({img, id, title, category, like, likes, shares }) {
    return (
        <>
            <div className='sa_margCardBlog'>
                <div className='sa_divImgBlogCa'>
                    <img src={img} alt="" className='w-100 h-100 object-fit-cover' />
                </div>
                <div>
                    <p className='text-white sa_titleBlogCard'>{title}</p>
                    <p className='text-gray-60 title-25-4'>{category}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center sa_DivMarginTop'>
                    <InterActions hideComment liked={like} likes={likes} shares={shares}  />
                    <Link className='sa_buttonBlogReadMore text-decoration-none text-gray-60' to={`/blog/${id}`}>
                        Read More
                        <img src={arrow} alt="arrow" className='sa_arrowBlogIcon' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogCard
