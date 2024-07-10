import PodcastEpisode from '../PodcastEpisode/PodcastEpisode'
import SectionTitle from '../SectionTitle/SectionTitle'
import './PodcastEpisodes.css'
import episodes from '../../data/epesodes'
import { useState } from 'react'

function PodcastEpisodes() {

    const [playing, setPlaying] = useState(-1)

    return (
        <>
            <SectionTitle
                subtitle='Stay Informed with Fresh Content'
                title='Latest Podcast Episodes' />
            <div className='bg-dark-08 overflow-hidden'>
                <div className="container_custom">
                    <div className='d-flex justify-content-between flex-wrap fa_episodes-grid'>
                        {
                            episodes.map(itme => (
                                <PodcastEpisode
                                    key={itme.id}
                                    id={itme.id}
                                    video={itme.video}
                                    setplay={setPlaying}
                                    played={(playing == itme.id)? true: false}
                                    title={itme.title}
                                    subtitle={itme.subtitle}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PodcastEpisodes