import './ContactInfoButton.css'
import arrow from "./../../assets/icons/arrow.svg";
import { Link } from 'react-router-dom'


const ContactInfoButton = ({btnContact_text}) => {
  return (
    <>
      <Link className="sub_title-125 HJ_button_Contact text-gray-60 bg-dark-10 ">
        {btnContact_text}
        <img
          src={arrow}
          alt="arrow"
          className="fa_arrow-icon cursor ms-2"
        />
      </Link>

    </>
  )
}

export default ContactInfoButton