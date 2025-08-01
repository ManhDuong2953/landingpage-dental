import VioletButton from "../../components/UI/VioletButton";
import HeroImg from "../../assets/images/ServicesPage/two-dentists-and-a-patient.png";

const HeroSection = () => {
  return (
    <section
      className="flex justify-center items-center gap-x-10 bg-sky-light laptopM:mb-40 px-5 mobileM:px-6 py-10 laptopM:py-20 tabletM:pr-8 tabletM:pl-24 rounded-[48px]"
    >
      {/* left content */}
      <div
        className="flex flex-col items-center tabletL:items-start tabletL:text-left text-center"
      >
        <h1>Root canals</h1>

        {/* hero image - display on tablet and mobile screens */}
        <div
          className="tabletL:hidden justify-center mt-12 mb-5 maw-w-[730px]"
        >
          <img
            src={HeroImg}
            alt="Dental surgery"
            className="w-full min-w-60 h-auto object-cover"
          />
        </div>

        <p className="mt-8 mb-14 max-w-[490px]">
          Root canals have gotten a bad reputation, but us dentists don’t know
          why! These are the types of treatments that actually make you feel
          better!
        </p>

        <VioletButton
                  isLink={true}
                  link="/landingpage-dental/services#book-appointment"
          addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileM:px-10 mobileM:py-5 tabletL:self-start"
        >
          Book an appointment
        </VioletButton>
      </div>

      {/* right content - hero image */}
      <div className="hidden tabletL:flex justify-center laptopM:-mb-52 maw-w-[730px]">
        <img
          src={HeroImg}
          alt="Dental surgery"
          className="w-full min-w-60 h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
