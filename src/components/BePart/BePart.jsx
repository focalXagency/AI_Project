import './BePart.css'
import logo_Bepart from './../../assets/icons/Logo_be part.svg'
import BePartCard from '../BePartCard/BePartCard'
import { useState } from 'react';

const BePart = () => {

  const [descriptionBepart, setDescriptionBepart] = useState('Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts,and drive innovation in the industry. Join a dynamic community of forward-thinkers');

  const handleResponsiveChange = () => {
    if (window.innerWidth < 577) {
      setDescriptionBepart('Immerse yourself in the world of future technology. Explore our comprehensive resources.');
    } else {
      setDescriptionBepart('Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts,and drive innovation in the industry. Join a dynamic community of forward-thinkers');
    }
  };
  window.addEventListener('resize', handleResponsiveChange);

  return (
    <div className=' HJ_bepart'>
      <div className='container_custom'>
        <div className=' HJ_part_one'>
          <div className='HJ_body'>
            <img src={logo_Bepart} alt='logo' className='HJ_image_logo' />
            <div className='HJ_information'>
              <h6 className='HJ_subTitle '>Learn, Connect, and Innovate</h6>
              <h2 className='HJ_title'>Be Part of the Future Tech Revolution</h2>
              <p className='HJ_paragraph'>{descriptionBepart}</p>
            </div>
          </div>
        </div>
        <div className='d-flex HJ_part_two '>
          <BePartCard title='Resource Access' description='Visitors can access a wide range of resources, including ebooks, whitepapers, reports.' />
          <BePartCard className="HJ_spaceCard" title='Community Forum' description='Join our active community forum to discuss industry trends and collaborate with peers.' />
          <BePartCard title='Tech Events' description='Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.' />
        </div>
      </div>
    </div>
  )
}

export default BePart