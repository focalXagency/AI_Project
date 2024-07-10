import './StarsRate.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


function StarsRate({rate}) {
    return (
        <div className='fa_starsRate'>
            {(() => {
                let starts = [];
                for (let index = 1; index <= 5; index++) {
                    if (index <= rate) {
                        starts.push(<AiFillStar key={index} />)
                    } else {
                        starts.push(<AiOutlineStar key={index} />)
                    }
                }
                return starts;
            }
            )()}
        </div>
    )
}

export default StarsRate