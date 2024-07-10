import './FutureTechResources.css'
import FutureTechRight from './../FutureTechRight/FutureTechRight'
import FutureTechLeft from './../FutureTechLeft/FutureTechLeft'
import img11 from './../../assets/ImageFuture1.png'
import img22 from './../../assets/ImageFuture2.png'
import future1 from './../../assets/future1.png'
import future2 from './../../assets/future2.png'
import SectionTitle_Button from '../SectionTitle_button/SectionTitle_Button'

function FutureTechResources() {
  return (
    <>
      <SectionTitle_Button subtitle='Your Gateway to In-Depth Information' title='Unlock Valuable Knowledge with FutureTechs Resources' buttontext='View All Resources' />
      <div className='v-100 bg-dark-08 sa_futureResource'>
        <div className='container_custom d-flex'>
          <FutureTechLeft
            img={future1}
            title={'Ebooks'}
            description={'Explore our collection of ebooks covering a wide spectrum of future technology topics.'}
            download={'Download Ebooks Now'}
            downloadUsers={'10k + Users'}
          />
          <FutureTechRight
            title={'Variety of Topics'}
            desc={'Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).'}
            img={img11}
            className={'text-gray-60 mb-0 sa_text_ebooks'}
            total={'Total Ebooks'}
            over={'Over 100 ebooks'}
            authored={'Ebooks are authored by renowned experts with an average of 15 years of experience'}
          />
        </div>
        <div className='sa_BorderBottom'></div>
        <div className='container_custom d-flex'>
          <FutureTechLeft
            img={future2}
            title={'Whitepapers'}
            description={'Dive into comprehensive reports and analyses with our collection of whitepapers. '}
            download={'Download Whitepapers Now'}
            downloadUsers={'10k + Users'}
          />
          <FutureTechRight
            title={'Topics Coverage'}
            desc={'Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).'}
            img={img22}
            className={'text-gray-60 mb-0 sa_text_ebookss'}
            total={'Total Whitepapers'}
            over={'Over 50 whitepapers'}
            authored={'Whitepapers are authored by subject matter experts with an average of 20 years of experience.'}
          />
        </div>
      </div>
    </>
  )
}

export default FutureTechResources