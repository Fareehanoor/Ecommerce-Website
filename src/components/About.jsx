import HeroSection from "../views/HeroSection";
import { useProductContext } from "../context/products/productContext";

const About = () => {
  const { myname } = useProductContext();
  const data = {
    name: "Ecommerce",
  };

  return (
    <>
      {myname}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
