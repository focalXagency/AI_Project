import './FutureTechRight.css'
import { Link } from 'react-router-dom'
import eye from './../../assets/eye.png'


function FutureTechRight({title, desc, img, className, total, over, authored}) {
    return (
        <div className='sa_futureResourceRight col-xl-8'>
            <div>
                <div className='sa_futResDivText'>
                    <h2 className='text-white title-5-5 mb-0 text-nowrap sa_minWidth'>{title}</h2>
                    <p className='sa_title_5 text-gray-60 text-wrap mb-0 '>{desc}</p>
                </div>
                <div>
                    <img src={img} alt="" className='sa_FutResImg col-12' />
                </div>
                <div className='sa_Wrap'>
                    <div className='sa_gapText sa_DivDesign sa_DivTotalEBook'>
                        <p className='text-gray-60 mb-0 sa_text_ebooks'>{total}</p>
                        <p className='text-white mb-0 sa_text_100ebooks text-nowrap '>{over}</p>
                    </div>
                    <div className='sa_DivDesign sa_DivDownloadFormats'>
                        <div className='sa_gapText'>
                            <p className={className}>Download Formats</p>
                            <p className='text-white mb-0 sa_text_100ebooks'>PDF format for access.</p>
                        </div>
                        <div>
                            <Link className='sa_buttonEye text-gray-60 text-decoration-none' to='resources'>
                                Preview
                                <img src={eye} alt="eye" className='sa_eyeIcon' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='sa_gapText sa_DivDesign sa_marg col-12'>
                    <p className='text-gray-60 mb-0 sa_text_ebooks'>Average Author Expertise</p>
                    <p className='text-white mb-0 title-25-5 text-wrap'>{authored}</p>
                </div>
            </div>
        </div>
    )
}

export default FutureTechRight