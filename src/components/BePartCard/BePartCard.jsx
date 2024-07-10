import './BePartCard.css'
import arrow_black from './../../assets/icons/arrow-black.svg'


const BePartCard = ({ title, description }) => {
  return (
    <div className='HJ_Bepart_Card'>
      <div className='HJ_content_card'>
        <h6 className='HJ_subtile_card'>{title}</h6>
        <div className='HJ_circle'>
          <img src={arrow_black} alt='arrow' />
        </div>
      </div>
      <p className='HJ_description_card'> {description}</p>
    </div>
  )
}

export default BePartCard