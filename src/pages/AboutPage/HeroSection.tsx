import VioletButton from "../../components/UI/VioletButton";
import DentistAndHisSmilingPatientImg from "../../assets/images/AboutPage/dentist-and-his-smiling-patient.png";


const HeroSection = () => {


  return (
    <section
      className="flex tablet:flex-row flex-col justify-center tablet:justify-between items-center gap-y-12 tablet:gap-x-24 mx-auto mt-10 px-5 w-full max-w-[1200px]"
    >
      {/* Left content */}
      <div className="flex flex-col items-center tablet:items-start tablet:text-left text-center">
        <h1
          className="whitespace-nowrap"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="600"
        >
          Về Chúng Tôi
        </h1>

        <p
          className="mt-6 max-w-[550px]"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="600"
        >
          Chúng tôi muốn bạn cảm thấy tuyệt vời với sức khỏe răng miệng của mình – không chỉ hai lần một năm, mà là mỗi khi bạn ăn uống, cười đùa, kể chuyện hay trao nhau một nụ hôn.
        </p>

        <div
          className="mt-10"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          <VioletButton
            isLink={true}
            link="/contact"
            addStyles="text-center rounded-2xl after:rounded-2xl px-6 py-4
            mobileM:px-10 mobileM:py-5 self-center tablet:self-start"
          >
            Liên hệ với chúng tôi
          </VioletButton>
        </div>
      </div>

      {/* Right image */}
      <div
        className="hidden tablet:block max-w-[620px]"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="800"
      >
        <img
          src={DentistAndHisSmilingPatientImg}
          alt="Nha sĩ và bệnh nhân đang cười"
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* Mobile image */}
      <div
        className="tablet:hidden mt-8"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="800"
      >
        <img
          src={DentistAndHisSmilingPatientImg}
          alt="Nha sĩ và bệnh nhân đang cười"
          className="rounded-xl w-full max-w-[500px] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
