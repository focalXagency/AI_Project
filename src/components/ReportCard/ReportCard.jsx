import './ReportCard.css'
import { Link } from 'react-router-dom'

const ReportCard = ({ ReportImg, titleCard_Report, paragraphCard_Report }) => {
  return (

    <div className='HJ_ReportCard '>
      <div>
        <img src={ReportImg} alt="Report Img" className='HJ_ReportIMG' />
      </div>
      <div>
        <h3 className='text-absolute-White HJ_title_CardReport'>{titleCard_Report}</h3>
        <p className='text-gray-60 sub_title-125_feature'>{paragraphCard_Report}</p>
      </div>
      <div className='HJ_CardReport_Buttons'>
        <Link className='sub_title-125 HJ_button_Report text-gray-60 bg-dark-8 '>
          View Details
        </Link>
        <Link className='sub_title-125 HJ_button_Report text-gray-60 bg-dark-10 '>
          Download PDF Now
        </Link>
      </div>

    </div>
  )
}

export default ReportCard