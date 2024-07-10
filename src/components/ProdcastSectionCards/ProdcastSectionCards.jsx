import './ProdcastSectionCards.css'
import ProdcastCard from '../ProdcastCard/ProdcastCard'
import ProdcastFeatures from '../ProdcastFeatures/ProdcastFeatures'
import Icon_prodcast1 from './../../assets/icons/Icon1_prodcast.svg'
import Icon_prodcast2 from './../../assets/icons/Icon2_prodcast.svg'
import vid1 from './../../assets/videos/vid1.mp4'
import { useState } from 'react'


const ProdcastSectionCards = () => {

  const [playing, setPlaying] = useState(-1)

  return (
    <div className='HJ_ProdcastSectionCards'>
      <div className='container_custom'>
        <div className='HJ_THeContentProdcast'>
          <ProdcastFeatures 
            image={Icon_prodcast1}
            title='AI Revolution'
            rate= '5'
            host_name='Dr. Sarah Mitchell'
          />
          <ProdcastCard
            video={vid1}
            played={(playing == 1) ? true: false}
            setplay={setPlaying}
            id={1}
            title='Delves into the transformative impact of AI'
            paragraph='Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.'
            total_episode='50'
            average_episode_length='30 min'
            frequency='Weekly'
          />
        </div>
      </div>

      <div className='sa_BorderBottom'></div>
        <div className='container_custom'>
          <div  className='HJ_THeContentProdcast'>
            <ProdcastFeatures 
              image={Icon_prodcast2}
              title='AI Conversations'
              rate= '5'
              host_name='Mark Anderson'
            />
            <ProdcastCard
              video={vid1}
              played={(playing == 2) ? true: false}
              setplay={setPlaying}
              id={2}
              title='Engage in thought-provoking conversations with leading experts.'
              paragraph='Mark discusses the future of AI, the impact on society, and how its shaping industries worldwide. Engage in thought-provoking conversations with leading experts.'
              total_episode='40'
              average_episode_length='40 min'
              frequency='Monthly'
            />
          </div>
        </div>
    </div>
  )
}

export default ProdcastSectionCards