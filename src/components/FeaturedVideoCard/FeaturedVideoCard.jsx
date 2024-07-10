import { Col } from 'react-bootstrap'
import CustomVideo from '../CustomVideo/CustomVideo'
import './FeaturedVideoCard.css'

function FeaturedVideoCard({ video, title, subtitle, id, set, played }) {
    return (
        <Col lg={6} className='fa_featured_videos-card position-relative'>
            <CustomVideo
                id={id}
                set={set}
                play={played}
                video={video} />
            <p className='mb-0 title-5 text-white fa_margin-p'>{title}</p>
            <p className='mb-0 sub_title-125 text-gray-60'>{subtitle}</p>
        </Col>
    )
}

export default FeaturedVideoCard