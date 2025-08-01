import DoctorAndNursePerformingAPatientImg from "../../assets/images/AboutPage/doctor-and-nurse-performing-a-dental-procedure-on-a-patient.png";
import VioletButton from "../../components/UI/VioletButton";

const OurPrioritySection = () => {
  return (
    <section
      className="justify-center tablet:justify-between items-center gap-x-16 section-1200"
    >
      {/* left content */}
      <div className="hidden tablet:block max-w-[550px]">
        <img
          src={DoctorAndNursePerformingAPatientImg}
          alt="Doctor and nurse performing a dental procedure on a patient"
          className="w-full min-w-60 h-auto object-cover"
        />
      </div>

      {/* right content */}
      <div className="flex flex-col">
        <span className="section-small-title">Our priority</span>

        <h2 className="mt-4 mb-6 tablet:max-w-[395px]">
          Our clients are our priority
        </h2>

        {/* image display on tablet and mobile screens */}
        <div className="tablet:hidden mt-8 mb-14 max-w-[550px]">
          <img
            src={DoctorAndNursePerformingAPatientImg}
            alt="Doctor and nurse performing a dental procedure on a patient"
            className="w-full min-w-60 h-auto object-cover"
          />
        </div>

        <p className="mx-auto tablet:mx-0 mb-14 max-w-[510px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <VioletButton
          isLink={true}
          link="/landingpage-dental#book-appointment"
          addStyles="text-center rounded-2xl after:rounded-2xl px-6 py-4
          mobileM:px-10 mobileM:py-5 self-center tablet:self-start"
        >
          Book an appointment
        </VioletButton>
      </div>
    </section>
  );
};

export default OurPrioritySection;
