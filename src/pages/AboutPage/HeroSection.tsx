import VioletButton from "../../components/UI/VioletButton";
import DentistAndHisSmilingPatientImg from "../../assets/images/AboutPage/dentist-and-his-smiling-patient.png";

const HeroSection = () => {
  return (
    <section
      className="flex justify-center tablet:justify-between items-center gap-x-24 mx-auto mt-10 w-full max-w-[1200px]"
    >
      {/* left content */}
      <div className="flex flex-col">
        <h1 className="whitespace-nowrap">About Us</h1>

        {/* hero image - display on tablet and mobile screens */}
        <div className="tablet:hidden mt-12 mb-5 max-w-[620px]">
          <img
            src={DentistAndHisSmilingPatientImg}
            alt="A dentist and his smiling patient"
            className="w-[full] min-w-60 h-auto object-cover"
          />
        </div>

        <p
          className="mx-auto tablet:mx-0 mt-8 mb-12 tablet:mb-16 max-w-[550px]"
        >
          We want you to feel amazing about your oral wellness. Not just twice a
          year, but every time you take a bite, tell a joke, laugh, or share a
          kiss.
        </p>
        <VioletButton
          isLink={true}
          link="/contact"
          addStyles="text-center rounded-2xl after:rounded-2xl px-6 py-4
          mobileM:px-10 mobileM:py-5 self-center tablet:self-start"
        >
          Contact Us
        </VioletButton>
      </div>

      {/* right content - hero image */}
      <div className="hidden tablet:block max-w-[620px]">
        <img
          src={DentistAndHisSmilingPatientImg}
          alt="A dentist and his smiling patient"
          className="w-[full] min-w-60 h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
