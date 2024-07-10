import FutureTechFeaturesOne from "../FutureTechFeaturesOne/FutureTechFeaturesOne";
import FutureTechFeaturesTwo from "../FutureTechFeaturesTwo/FutureTechFeaturesTwo";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./FutureTechFeatures.css";


const FutureTechFeatures = () => {
  return (
      <>
        <SectionTitle subtitle='Unlock the Power of' title='FutureTech Features' />
        <FutureTechFeaturesOne/>
        <FutureTechFeaturesTwo/>
      </>
  );
};

export default FutureTechFeatures;
