import { Col, Row } from 'react-bootstrap'
import './AskedQuestions.css'
import FutureTechFeaturesNews from '../FutureTechFeaturesNews/FutureTechFeaturesNews'
import asked from './../../assets/icons/asked.svg'
import arrow from './../../assets/icons/arrow.svg'
import { Link } from 'react-router-dom'
import AccprdionC from '../AccprdionC/AccprdionC'

function AskedQuestions() {
    return (
        <div className='bg-dark-08'>
            <div className='container_custom'>
                <Row>
                    <Col lg={5} className='fa_asked-left d-flex flex-column justify-content-center'>
                        <div className='fa_child-left'>
                            <FutureTechFeaturesNews
                                img={asked}
                                className='HJ_imgSize_Features-1'
                                title="Future Technology Blog"
                                discription="Stay informed with our blog section dedicated to future technology."
                            />
                            <Link href="#" className='sub_title-125 text-gray-60 main_button fa_asked-button'>
                                Ask Qustion
                                <img src={arrow} alt="arrow" className='fa_arrow-icon cursor ms-2' />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={7} className='fa_asked-right'>
                        <AccprdionC />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AskedQuestions