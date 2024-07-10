import './ProdcastFeatures.css'
import StarsRate from '../StarsRate/StarsRate'
import arrow from "./../../assets/icons/arrow.svg";
import { Link } from 'react-router-dom';


const ProdcastFeatures = ({ image, title, rate, host_name }) => {
    return (
        <div className='HJ_ProdcastFeatures'>
            <div className='HJ_imageProdcast'>
                <img src={image} alt="prodcast" />
            </div>
            <div className='HJ_Podcast-main-container'>
                <div className='HJ_MainPart'>
                    <h6 className='title-2 text-absolute-White'>{title}</h6>
                    <div>
                        <StarsRate rate={rate} />
                    </div>
                </div>

                <div className='HJ_border_prodcast'>
                    <div className='HJ_info'>
                        <h6 className='sub_title-125 text-gray-60 '>Host</h6>
                        <p className='sub_title-125 text-absolute-White mb-0'>{host_name}</p>
                    </div>
                    <Link className="sub_title-125 text-gray-60 section_button">
                        Listen Podcast
                        <img
                            src={arrow}
                            alt="arrow"
                            className="fa_arrow-icon cursor ms-2"
                        />
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default ProdcastFeatures