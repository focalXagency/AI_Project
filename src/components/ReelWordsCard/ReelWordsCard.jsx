import { Col } from 'react-bootstrap'

import './ReelWordsCard.css'
import StarsRate from '../StarsRate/StarsRate'

function ReelWordsCard({ img, userName, location, rate, words }) {
    return (
        <div className='fa_realwords-container'>
            <div className='d-flex justify-content-center align-items-center fa_realwords-user_gap'>
                <div>
                    <img src={img} alt="user" className='fa_userwords-img' />
                </div>
                <div>
                    <p className="mb-0 title-25-5 text-white">{userName}</p>
                    <p className="mb-0 sub_title-125 text-dark-40">{location}</p>
                </div>
            </div>
            <div className='fa_realwords-card_body position-relative'>
                <div className='fa_realword-rate'>
                    <StarsRate rate={rate} />
                </div>
                <div>
                    <p className='mb-0 sub_title-125 text-white text-center'>{words} </p>
                </div>
            </div>
        </div>
    )
}

export default ReelWordsCard