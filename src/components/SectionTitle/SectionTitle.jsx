import "./SectionTitle.css";

const SectionTitle = ({ subtitle, title }) => {

  return (
    
    <div className="HJ_SectionTitle">
      <div className="container_custom ">
        <div className="HJ_mainPart">
          <div className="HJ_Titles">
            <h6 className="HJ_subTitle">{subtitle} </h6>
            <h2 className="HJ_title_margin  title-3  text-absolute-White">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
