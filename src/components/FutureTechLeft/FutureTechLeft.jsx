import './FutureTechLeft.css'
import arrow from './../../assets/icons/arrow.svg'
import { Link } from 'react-router-dom'
import FutureTechFeaturesNews from '../FutureTechFeaturesNews/FutureTechFeaturesNews'
import UsersPics from '../UsersPics/UsersPics'
import user1 from './../../assets/user1.png'
import user2 from './../../assets/user2.png'
import user3 from './../../assets/user3.png'
import user4 from './../../assets/user4.png'

function FutureTechleft({img, title, description, download, downloadUsers}) {

    const users = [user1, user2, user3, user4];

    return (
        <div className='sa_futureResourceLeft col-xl-4'>
            <div>
                <FutureTechFeaturesNews sar
                img={img}
                className={'sa_futureIcon'}
                title={title}
                discription={description}
                />
            </div>
            <div className='sa_DivButtonIconResorce'>
                <Link className='sa_buttonIconResorce text-gray-60 text-decoration-none' to='resources'>
                    {download}
                    <img src={arrow} alt="arrow" className='sa_eyeIcon' />
                </Link>
            </div>
            <div className='sa_DownloadDiv'>
                <div>
                    <p className='sub_title-125 text-gray-60 mb-0 text-nowrap '>Downloaded By</p>
                    <p className=' text-white title-5 mb-0 text-nowrap'>{downloadUsers}</p>
                </div>
                <div>
                    <UsersPics small users={users}/>
                </div>
            </div>
        </div>
    )
}

export default FutureTechleft