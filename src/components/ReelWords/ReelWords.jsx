import ReelWordsCard from '../ReelWordsCard/ReelWordsCard'
import './ReelWords.css'

import realwords from '../../data/realWordsData'
import SectionTitle_Button from '../SectionTitle_button/SectionTitle_Button'

function ReelWords() {
    return (
        <>
            <SectionTitle_Button subtitle='What Our Readers Say' title='Real Words from Real Readers' buttontext='View All Testimonials' />
            <div className='fa_realwords overflow-hidden'>
                <div className="container_custom">
                    <div className='fa_realword-grid d-flex justify-content-between'>
                        {
                            realwords.map(word => (
                                <ReelWordsCard
                                    key={word.id}
                                    img={word.img}
                                    userName={word.userName}
                                    location={word.location}
                                    rate={word.rate}
                                    words={word.realword}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReelWords