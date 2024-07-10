import "./FutureFeaturesCards.css"

const FutureFeaturesCards = ({ titleInformation , descriptionInformation }) => {
  return (
    <div className="HJ_FutureFeaturesCard">
      <h5 className="title-5-5 text-absolute-White">{titleInformation}</h5>
      <p className=" sub_title-125_feature text-gray-60 HJ_paragrah">
        {descriptionInformation}
      </p>
    </div>
  );
};

export default FutureFeaturesCards;
