import { Col } from 'react-bootstrap'
import './HeroNews.css'

import arrow from './../../assets/icons/arrowBlack.svg'
import { Link } from 'react-router-dom'

function HeroNews({img, title, subtitle, discription}) {
    return (
        <Col lg xs={12} className='fa_HeroNews-container fa_border-bottom'>
            <div>
                <img src={img} alt="icon" className='fa_HeroNews-icon' />
            </div>
            <div className='d-flex align-items-center justify-content-between fa_HreoNews-text-margin'>
                <div>
                    <p className='mb-0 title-25-5 text-white'>{title}</p>
                    <p className='mb-0 sub_title-125 text-gray-50'>{subtitle}</p>
                </div>
                <Link to='blog/news' className='fa_HeroNews-Button d-flex justify-content-center align-items-center'>
                    <img src={arrow} alt="arrow" className='fa_arrow-icon' />
                </Link>
            </div>
            <div>
                <p className='mb-0 title-25-4 text-gray-60'>{discription}</p>
            </div>
        </Col>
    )
}

export default HeroNews