import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import DepthReportsAnalysis from '../components/DepthReportsAnalysis/DepthReportsAnalysis'
import ReportCardsSection from '../components/ReportCardsSection/ReportCardsSection'
import ResourcesNumbers from '../components/ResourcesNumbers/ResourcesNumbers'

function Resources() {
  return (
    <div>
      <PageTitle
        title1="Unlock a World of"
        title2="Knowledge"
        summary="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation." />
      <ResourcesNumbers />
      <DepthReportsAnalysis />
      <ReportCardsSection/>
    </div>
  )
}

export default Resources