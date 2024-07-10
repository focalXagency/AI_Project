import FutureTechFeaturesNews from '../FutureTechFeaturesNews/FutureTechFeaturesNews'
import './DepthReportsAnalysisLeft.css'


function DepthReportsAnalysisLeft({ img, title, description, }) {
    return (
        <>
            <div className='sa_futureResourceLeft col-xl-4'>
                <div>
                    <FutureTechFeaturesNews sar
                        img={img}
                        className={'sa_futureIcon'}
                        title={title}
                        discription={description}
                    />
                </div>
            </div>

        </>
    )
}

export default DepthReportsAnalysisLeft