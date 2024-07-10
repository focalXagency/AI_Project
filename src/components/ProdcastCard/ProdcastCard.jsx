import './ProdcastCard.css'
import CustomVideo from '../CustomVideo/CustomVideo'

const ProdcastCard = ({ video, played, id, setplay, title, paragraph, total_episode, average_episode_length, frequency }) => {
    return (
        <div className='HJ_prodcastCard'>
            <div>
                <CustomVideo
                    video={video}
                    play={played}
                    podcast
                    set={setplay}
                    id={id}
                    className='HJ_video'
                />
                <h2 className='title-prodcast text-absolute-White HJ_MarginTitle'>{title}</h2>
                <p className='sub_title-125_feature text-gray-60 HJ_MarginParagraph'>{paragraph}</p>
            </div>
            <div className='HJ_container_descriptionProdcast'>
                <div className='HJ_descriptionProdcast'>
                    <h6 className='sub_title-125_feature  text-gray-60 '>Total Episodes</h6>
                    <p className='title-25-5 text-absolute-White mb-0'>{total_episode}</p>
                </div> 
                <div className='HJ_descriptionProdcast'>
                    <h6 className='sub_title-125_feature  text-gray-60 '>Average Episode Length</h6>
                    <p className='title-25-5 text-absolute-White mb-0'>{average_episode_length}</p>
                </div>
                <div className='HJ_descriptionProdcast'>
                    <h6 className='sub_title-125_feature  text-gray-60 '>Release Frequency</h6>
                    <p className='title-25-5 text-absolute-White mb-0'>{frequency}</p>
                </div>
            </div>
        </div>
    )
}

export default ProdcastCard