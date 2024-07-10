import { Col, Row } from 'react-bootstrap'
import './Hero.css'
import UsersPics from '../UsersPics/UsersPics'
import user1 from './../../assets/user1.png'
import user2 from './../../assets/user2.png'
import user3 from './../../assets/user3.png'
import user4 from './../../assets/user4.png'
import arrow from './../../assets/icons/arrow.svg'
import { Link } from 'react-router-dom'

import NumbersData from '../../data/numbers'
import NumCard from '../NumCard/NumCard'
import HeroNews from '../HeroNews/HeroNews'

import news1 from './../../assets/HreoNews1.svg'
import news2 from './../../assets/HreoNews2.svg'
import news3 from './../../assets/HreoNews3.svg'

function Hero() {
  const users = [user1, user2, user3, user4];
  return (
    <>
      <div className='fa_hero fa_border-bottom'>
        <div className="container_custom h-100">
          <Row className='h-100'>
            <Col lg={7} className='d-flex flex-column fa_custom-minheight'>
              <div className='flex-grow-1 d-flex flex-column justify-content-center fa_hreotitle-padding'>
                <p className='fa_top-title fa_hero-toptitle'>Your Journey to Tomorrow Begins Here</p>
                <h1 className='text-white title-4b fa_hero-title'>Explore the Frontiers of Artificial Intelligence</h1>
                <p className='sub_title-125 text-gray-50'>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
              </div>
              <div className='d-flex justify-content-between fa_NumCard-gap position-relative'>
                <div className='fa_heroLine-vertical'></div>
                {
                  NumbersData.slice(0, 3).map(item => (
                    <NumCard
                      key={item.id}
                      number={item.number}
                      subtext={item.subText}
                    />
                  ))
                }
              </div>
            </Col>
            <Col lg={5} className='fa_hero-background fa_custom-minheight d-flex align-items-end'>
              <div className='d-flex align-items-start flex-column fa_gap-30'>
                <UsersPics users={users} />
                <div>
                  <p className='mb-0 fa_mb-14 title-5-5 text-white'>Explore 1000+ resources</p>
                  <p className='mb-0 sub_title-125 text-gray-60'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <Link className='sub_title-125 text-gray-60 main_button' to='resources'>
                  Explore Resources
                  <img src={arrow} alt="arrow" className='fa_arrow-icon cursor ms-2' onClick={() => setclicked(true)} />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='fa_border-bottom fa_background-08'>
        <div className='container_custom'>
          <Row>
            <HeroNews
              img={news1}
              title='Latest News Updates'
              subtitle='Stay Current'
              discription='Over 1,000 articles published monthly' />
            <HeroNews
              img={news2}
              title='Expert Contributors'
              subtitle='Trusted Insights'
              discription='50+ renowned AI experts on our team' />
            <HeroNews
              img={news3}
              title='Global Readership'
              subtitle='Worldwide Impact'
              discription='2 million monthly readers' />
          </Row>
        </div>
      </div>
    </>
  )
}

export default Hero