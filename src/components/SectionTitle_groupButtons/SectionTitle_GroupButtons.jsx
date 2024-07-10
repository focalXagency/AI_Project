import './SectionTitle_GroupButtons.css'
import LearningResources from "../LearningResources/LearningResources";

const SectionTitle_GroupButtons = ({ subtitle, title }) => {
  return (
    <div className="HJ_SectionTitle">
      <div className="container_custom ">
        <div className="HJ_distance">
          <div className="HJ_Titles">
            <h6 className="HJ_subTitle">{subtitle} </h6>
            <h2 className="HJ_title_margin  title-3  text-absolute-White">
              {title}
            </h2>
          </div>
          <div className='HJ_learningResources_part'>
            <LearningResources />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle_GroupButtons;
