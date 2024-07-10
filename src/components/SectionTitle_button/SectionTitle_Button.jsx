import './SectionTitle_Button.css'
import arrow from "./../../assets/icons/arrow.svg";
import { Link } from "react-router-dom";

const SectionTitle_Button = ({ subtitle, title, buttontext }) => {
  return (
    <div className="HJ_SectionTitle">
      <div className="container_custom ">
        <div className="HJ_section_space">
          <div className="HJ_Titles">
            <h6 className="HJ_subTitle title-25-5">{subtitle} </h6>
            <h2 className="HJ_title_margin  title-3 text-absolute-White">
              {title}
            </h2>
          </div>
          <div className="HJ_button">
            <Link className="sub_title-125 text-gray-60 section_button">
              {buttontext}
              <img
                src={arrow}
                alt="arrow"
                className="fa_arrow-icon cursor ms-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle_Button;
