import FeatureProducts from "../views/FeatureProducts";
import HeroSection from "../views/HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";

const Home = () => {
  const data = {
    name: "thapa store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
