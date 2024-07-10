import FutureTechFeaturesNews from "../FutureTechFeaturesNews/FutureTechFeaturesNews";
import FutureFeaturesCards from "../FutureTechFeaturescards/FutureFeaturesCards";
import features_img1 from "./../../assets/Icon Features 1.svg";

const FutureTechFeaturesOne = () => {
  return (
    <div className="HJ_FutureTechFeatures">
      <div className="container_custom">
        <div className="d-flex  HJ_parts HJ_gap_parts">
          <div className="HJ_FutureFeatures_part1">
            <FutureTechFeaturesNews
              img={features_img1}
              className='HJ_imgSize_Features-1'
              title="Future Technology Blog"
              discription="Stay informed with our blog section dedicated to future technology."
            />
          </div>
          <div className="HJ_FutureFeatures_part2">
            <div className="d-flex justify-content-between HJ_gap">
              <FutureFeaturesCards
                titleInformation="Quantity"
                descriptionInformation="Over 1,000 articles on emerging tech trends and breakthroughs."
              />
              <FutureFeaturesCards
                titleInformation="Variety"
                descriptionInformation="Articles cover fields like AI, robotics, biotechnology, and more."
              />
            </div>

            <div className="d-flex justify-content-between HJ_gap">
              <FutureFeaturesCards
                titleInformation="Frequency"
                descriptionInformation="Fresh content added daily to keep you up to date."
              />
              <FutureFeaturesCards
                titleInformation="Authoritative"
                descriptionInformation="Written by our team of tech experts and industry professionals."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechFeaturesOne;
