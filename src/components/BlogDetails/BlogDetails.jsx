import { Col, Row } from 'react-bootstrap'
import './BlogDetails.css'
import InterActions from '../InterActions/InterActions'
import { FaArrowDown, FaArrowUp } from "react-icons/fa6"
import { useState } from 'react'

function BlogDetails({ item }) {
    const [show, setshow] = useState(false)
    return (
        <div className='bg-dark-08 fa_blogDetails-container overflow-hidden'>
            <div className='container_custom'>
                <Row>
                    <Col lg={8} md={7} className='px-0 order-md-1 order-2'>
                        <div className='fa_introduction position-relative '>
                            <h1 className='title-25-5 text-white fa_intro-h1'>{item.contents[0].title}</h1>
                            <p className='mb-0 text-gray-60 sub_title-125'>{item.contents[0].description}</p>
                            <div className='fa_interactions-line-intro'></div>
                        </div>
                        <div className={`fa_content-blog ${show&&'fa_show-all-content'}`}>
                            {
                                item.contents.slice(1, -1).map(content => (
                                    <div className='fa_introduction-content-container'>
                                        <h1 className='text-white fa_blog-title'>{content.title}</h1>
                                        <p className='mb-0 text-gray-60 sub_title-125'>{content.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`text-center py-5 fa_down-container ${show&&'fa_show-all-content'}`}>
                            <button className='sub_title-125 text-gray-60 text-decoration-none' onClick={() => {setshow(!show)}}>{show?<>Show Less <FaArrowUp className='ms-2'/></>:<>Read Full Blog <FaArrowDown className='ms-2' /></>}</button>
                        </div>
                    </Col>
                    <Col lg={4} md={5} className='px-0 fa_blogDetails-right order-md-2 order-1'>
                        <div className='fa_blogDetails-interactions position-relative'>
                            <InterActions liked={item.liked} likes={item.Likes} comments={item.comments} shares={item.shares} />
                            <div className='fa_interactions-line'></div>
                        </div>
                        <div className='fa_blogDetails'>
                            <div className='d-flex fa_flex-warp'>
                                <div className='fa_blogDetails-subcontainer'>
                                    <p className='fa_blogDetails-p text-gray-60 sub_title-125'>Publication Date</p>
                                    <p className='mb-0 sub_title-125 text-white'>{item.pubDate}</p>
                                </div>
                                <div className='fa_blogDetails-subcontainer'>
                                    <p className='fa_blogDetails-p text-gray-60 sub_title-125'>Category</p>
                                    <p className='mb-0 sub_title-125 text-white'>{item.category}</p>
                                </div>
                                <div className='fa_blogDetails-subcontainer'>
                                    <p className='fa_blogDetails-p text-gray-60 sub_title-125'>Reading Time</p>
                                    <p className='mb-0 sub_title-125 text-white'>{item.readingTime} Min</p>
                                </div>
                                <div className='fa_blogDetails-subcontainer'>
                                    <p className='fa_blogDetails-p text-gray-60 sub_title-125'>Author Name</p>
                                    <p className='mb-0 sub_title-125 text-white'>{item.author}</p>
                                </div>
                            </div>
                            <div>
                                <p className='fa_blogDetailes-index sub_title-125 text-gray-60'>Table of Contents</p>
                                <div className='fa_index-container'>
                                    <ul className='sub_title-125 text-white fa_index'>
                                        {
                                            item.contents.map(index => (
                                                <li>{index.title}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BlogDetails