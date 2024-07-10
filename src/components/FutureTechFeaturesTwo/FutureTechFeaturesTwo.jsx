import FutureTechFeaturesNews from "../FutureTechFeaturesNews/FutureTechFeaturesNews";
import FutureFeaturesCards from "../FutureTechFeaturescards/FutureFeaturesCards";
import features_img2 from "./../../assets/Icon  Features 2.svg";


const FutureTechFeaturesTwo = () => {
  return (
    <div className="HJ_FutureTechFeatures">
      <div className="container_custom">
        <div className="d-flex  HJ_parts  HJ_gap_parts">
          <div className="HJ_FutureFeatures_part1">
            <FutureTechFeaturesNews
              img={features_img2}
              className='HJ_imgSize_Features-2'
              title="Research Insights Blogs"
              discription="Dive deep into future technology concepts with our research section."
            />
          </div>
          <div className="HJ_FutureFeatures_part2">
            <div className="d-flex justify-content-between HJ_gap">
              <FutureFeaturesCards
                titleInformation="Depth"
                descriptionInformation="500+ research articles for in-depth understanding."
              />
              <FutureFeaturesCards
                titleInformation="Graphics"
                descriptionInformation="Visual aids and infographics to enhance comprehension."
              />
            </div>

            <div className="d-flex justify-content-between HJ_gap">
              <FutureFeaturesCards
                titleInformation="Trends"
                descriptionInformation="Explore emerging trends in future technology research."
              />
              <FutureFeaturesCards
                titleInformation="Contributors"
                descriptionInformation="Contributions from tech researchers and academics."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechFeaturesTwo;
