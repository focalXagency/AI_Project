import './DepthReportsAnalysis.css'
import DepthReportsAnalysisRight from './../DepthReportsAnalysisRight/DepthReportsAnalysisRight'
import DepthReportsAnalysisLeft from './../DepthReportsAnalysisLeft/DepthReportsAnalysisLeft'
import img1 from './../../assets/DepthImg1.png'
import img2 from './../../assets/DepthImg2.png'
import Depth1 from './../../assets/Depth1.svg'
import Depth2 from './../../assets/Depth2.svg'
import SectionTitle_GroupButtons from '../SectionTitle_groupButtons/SectionTitle_GroupButtons'


function DepthReportsAnalysis() {
  return (
    <>
      <SectionTitle_GroupButtons
        title='In-Depth Reports and Analysis'
        subtitle='Dive into the Details'
      />
      <div className='v-100 bg-dark-08 sa_futureResource'>
        <div className='container_custom d-flex'>
          <DepthReportsAnalysisLeft
            img={Depth1}
            title={'Quantum Computing Whitepaper'}
            description={'Provides technical specifications and requirements for implementing quantum computing systems.'}
          />
          <DepthReportsAnalysisRight
            img={img1}
            title={'Quantum Computing Whitepaper'}
            desc={'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.'}
            publicationDate={'July 2023'}
            category={'Quantum Computing'}
            author={'Dr. Quantum'}
          />
        </div>
        <div className='sa_BorderBottom'></div>
        <div className='container_custom d-flex'>
          <DepthReportsAnalysisLeft
            img={Depth2}
            title={'Space Exploration Whitepaper'}
            description={'Explores Mars colonization, asteroid resource potential, and space tourism.'}
          />
          <DepthReportsAnalysisRight
            img={img2}
            title={'Quantum Computing Whitepaper'}
            desc={'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.'}
            publicationDate={'September 2023'}
            category={'Space Exploration'}
            author={'FutureTech Space Division'}
          />
        </div>
      </div>
    </>
  )
}

export default DepthReportsAnalysis