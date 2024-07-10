import './PostCard.css'
import personImg from './../../assets/ImagePerson.png';
import { Link } from 'react-router-dom';
import arrow from './../../assets/icons/arrow.svg'
import InterActions from '../InterActions/InterActions';


function PostCard({ item }) {
    return (
        <div>
            {
                item.slice(0, 3).map((val) => (
                    <div key={val.id} className='v-100 bg-dark-08 sa_PostCard'>
                        <div className='sa_postContainer container_custom'>
                            <div className='sa_divPerson sa_order_1'>
                                <div>
                                    <img src={personImg} alt="personImg" className='sa_personImg' />
                                </div>
                                <div>
                                    <p className="title-25-5 text-white mb-0">{val.name}</p>
                                    <p className="sub_title-125 text-dark-40 mb-0">{val.education}</p>
                                </div>
                            </div>
                            <div className='sa_postDetails sa_order_3'>
                                <p className='sa_PostDate text-gray-60'>{val.date}</p>
                                <h1 className='sa_PostTitle text-white'>{val.title}</h1>
                                <p className='sa_PostDescription text-gray-60 sub_title-125'>{val.description}</p>
                                <InterActions liked={val.like} likes={val.likes} comments={val.comments} shares={val.shares} />
                            </div>
                            <div className='sa_buttonView sa_order_2'>
                                <Link className='main_button sub_title-125 text-gray-60 sa_buttonViewBlog'>
                                    Read More
                                    <img src={arrow} alt="arrow" className='sa_arrowIcon sa_arr' />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>


    )
}


// function PostCard({name,education,date,title,description}) {
//     return (
//         <div className='v-100 bg-dark-08 sa_PostCard'>
//             <div className='sa_postContainer container_custom'>
//                 <div className='sa_divPerson sa_order_1'>
//                     <div>
//                         <img src={personImg} alt="personImg" className='sa_personImg' />
//                     </div>
//                     <div>
//                         <p className="title-25-5 text-white mb-0">{name}</p>
//                         <p className="sub_title-125 text-dark-40 mb-0">{education}</p>
//                     </div>
//                 </div>
//                 <div className='sa_postDetails sa_order_3'>
//                         <p className='sa_PostDate text-gray-60'>{date}</p>
//                         <h1 className='sa_PostTitle text-white'>{title}</h1>
//                         <p className='sa_PostDescription text-gray-60 sub_title-125'>{description}</p>
//                         <InterActions />
//                     </div>
//                 <div className='sa_buttonView sa_order_2'>
//                     <Link className='main_button sub_title-125 text-gray-60 sa_buttonViewBlog' to='blog'>
//                         View Blog
//                         <img src={arrow} alt="arrow" className='sa_arrowIcon sa_arr' />
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default PostCard