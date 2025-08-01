import VioletButton from "../../components/UI/VioletButton";
import DentalSurgeryImg from "../../assets/images/HomePage/patient-receiving-dental-treatment-1.png";

const DentalEmergency = () => {
  return (
    <section
      className="justify-center tablet:justify-between items-center gap-x-16 section-1200"
    >
      {/* left content */}
      <div className="hidden tablet:block max-w-[550px]">
        <img
          src={DentalSurgeryImg}
          alt="Patient receiving dental treatment"
          className="w-full min-w-60 h-auto object-cover"
        />
      </div>

      {/* right content */}
      <div className="flex flex-col items-center tablet:items-start tablet:text-left text-center">
        <span className="section-small-title">Dental 24 emergency</span>

        <h2 className="mt-4 mb-6 max-w-[550px]">
          Gentle, friendly treatment from our locally practice
        </h2>

        {/* image display on tablet and mobile screens */}
        <div className="tablet:hidden mt-8 mb-14 max-w-[550px]">
          <img
            src={DentalSurgeryImg}
            alt="Patient receiving dental treatment"
            className="w-full min-w-60 h-auto object-cover"
          />
        </div>

        <p className="mb-16 max-w-[510px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <VioletButton
          isLink={true}
          link="/landingpage-dental#book-appointment"
          addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileM:px-10 mobileM:py-5 tablet:self-start"
        >
          Book an appointment
        </VioletButton>
      </div>
    </section>
  );
};

export default DentalEmergency;
