import HeroSection from "./HeroSection";
import dentalistIsReImagining from "./dentalistIsReImagining";
import ServicesSection from "./ServicesSection";
import DentalEmergency from "./DentalEmergency";
import FeaturesSection from "./FeaturesSection";
import ExpertsInDental from "./ExpertsInDental";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";
import BookAppointment from "../../components/BookAppointment";

const Home = () => {
  return (
    <>
      <HeroSection />
      <dentalistIsReImagining />
      <ServicesSection />
      <DentalEmergency />
      <FeaturesSection />
      <ExpertsInDental />
      <Testimonials />
      <BlogSection />
      <BookAppointment />
    </>
  );
};

export default Home;
