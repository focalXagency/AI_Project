import ReportCard from '../ReportCard/ReportCard'
import './ReportCardsSection.css'
import ReportImg1 from './../../assets/ImageReportCard1.png'
import ReportImg2 from './../../assets/ImageReportCard2.png'
import ReportImg3 from './../../assets/ImageReportCard3.png'

const ReportCardsSection = () => {
  return (
    <div className='HJ_ReportCardsSection'>
      <div className='container_custom '>
        <div className='HJ_ContentSectionCards'>
          <ReportCard
            ReportImg={ReportImg1}
            titleCard_Report='FutureTech Trends 2024'
            paragraphCard_Report='An ebook that predicts upcoming technology trends for the next year, including AI developments'
          />

          <ReportCard
            ReportImg={ReportImg2}
            titleCard_Report='Space Exploration Ebook'
            paragraphCard_Report='An ebook that predicts upcoming technology trends for the next year, including AI developments'
          />

          <ReportCard
            ReportImg={ReportImg3}
            titleCard_Report='Quantum Computing Whitepaper'
            paragraphCard_Report='An in-depth whitepaper exploring the principles, applications.'
          />
        </div>
      </div>

    </div>
  )
}

export default ReportCardsSection