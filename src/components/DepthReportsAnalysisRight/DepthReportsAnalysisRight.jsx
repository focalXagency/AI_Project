import './DepthReportsAnalysisRight.css'
import arrow from './../../assets/icons/arrow.svg'
import { Link } from 'react-router-dom'


function DepthReportsAnalysisRight({ img, title, desc, publicationDate, category, author }) {
    return (
        <div className='sa_futureResourceRight col-xl-8'>
            <div>
                <img src={img} alt="img" className='col-12 sa_DepthReport' />
            </div>
            <div className='sa_DepthDivText'>
                <div>
                    <h2 className='text-white sa_title_5-5'>{title}</h2>
                    <p className='sub_title-125_feature text-gray-60 text-wrap mb-0 '>{desc}</p>
                </div>
                <Link className='sa_buttonEye sa_buttDwonNow d-flex justify-content-center text-gray-60 text-decoration-none'>
                    Download PDF Now
                    <img src={arrow} alt="arrow" className='sa_eyeIcon' />
                </Link>
            </div>
            <div className='sa_DivDateCategAuth'> 
                <div className='sa_Div3'>
                    <p className='sub_title-125_feature text-gray-60 mb-0'>Publication Date</p>
                    <p className='sa_title-25__5 text-white mb-0 '>{publicationDate}</p>
                </div>
                <div className='sa_Div3'>
                    <p className='sub_title-125_feature text-gray-60 mb-0'>Category</p>
                    <p className='sa_title-25__5 text-white mb-0 '>{category}</p>
                </div>
                <div className='sa_Div3 sa_Div_3'>
                    <p className='sub_title-125_feature text-gray-60 mb-0'>Author</p>
                    <p className='sa_title-25__5 text-white mb-0 '>{author}</p>
                </div>
            </div>
        </div>
    )
}

export default DepthReportsAnalysisRight