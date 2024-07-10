import FeaturedVideoCard from '../FeaturedVideoCard/FeaturedVideoCard'
import './FeaturedVideos.css'
import { Row } from 'react-bootstrap'
import SectionTitle_Button from '../SectionTitle_button/SectionTitle_Button'
import FeaturedVid from '../../data/FeatturedVid'
import { useState } from 'react'

function FeaturedVideos() {

    const [active, setactive] = useState(-1)

    return (
        <>
            <SectionTitle_Button subtitle='Featured Videos' title='Visual Insights for the Modern Viewer' buttontext='View All' />
            <div className='fa_Featured-videos bg-dark-08 overflow-hidden'>
                <div className='container_custom' >
                    <Row className='fa_featured-videos_grid'>
                        {
                            FeaturedVid.map(vid => (
                                <FeaturedVideoCard
                                    key={vid.id}
                                    id={vid.id}
                                    set={setactive}
                                    played={(active == vid.id)? true: false}
                                    title={vid.title}
                                    subtitle={vid.subtitle}
                                    video={vid.vid} />
                            ))
                        }
                    </Row>
                </div>
            </div>
        </>
    )
}

export default FeaturedVideos