import DoctorAndNursePerformingAPatientImg from "../../assets/images/AboutPage/doctor-and-nurse-performing-a-dental-procedure-on-a-patient.png";
import VioletButton from "../../components/UI/VioletButton";

const OurPrioritySection = () => {
  return (
    <section
      className="flex tablet:flex-row flex-col justify-center tablet:justify-between items-center gap-y-12 tablet:gap-x-16 section-1200"
    >
      {/* Left content - Image (desktop) */}
      <div
        className="hidden tablet:block max-w-[550px]"
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        <img
          src={DoctorAndNursePerformingAPatientImg}
          alt="Bác sĩ và y tá đang thực hiện thủ thuật nha khoa cho bệnh nhân"
          className="rounded-xl w-full min-w-60 h-auto object-cover"
        />
      </div>

      {/* Right content */}
      <div className="flex flex-col items-center tablet:items-start tablet:text-left text-center">
        <span
          className="section-small-title"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Ưu tiên hàng đầu
        </span>

        <h2
          className="mt-4 mb-6 tablet:max-w-[395px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Sự hài lòng của khách hàng là ưu tiên của chúng tôi
        </h2>

        {/* Image on mobile/tablet */}
        <div
          className="tablet:hidden mt-8 mb-12 max-w-[550px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src={DoctorAndNursePerformingAPatientImg}
            alt="Bác sĩ và y tá đang thực hiện thủ thuật nha khoa cho bệnh nhân"
            className="rounded-xl w-full min-w-60 h-auto object-cover"
          />
        </div>

        <p
          className="mx-auto tablet:mx-0 mb-12 max-w-[510px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Chúng tôi luôn đặt khách hàng làm trung tâm trong mọi dịch vụ.
          Từ chăm sóc định kỳ đến các thủ thuật phức tạp, đội ngũ của chúng tôi luôn tận tâm mang đến sự thoải mái và kết quả tốt nhất cho bạn.
        </p>

        <div data-aos="fade-up" data-aos-delay="500">
          <VioletButton
            isLink={true}
            link="/landingpage-dental#book-appointment"
            addStyles="text-center rounded-2xl after:rounded-2xl px-6 py-4
            mobileM:px-10 mobileM:py-5 self-center tablet:self-start"
          >
            Đặt lịch hẹn ngay
          </VioletButton>
        </div>
      </div>
    </section>
  );
};

export default OurPrioritySection;
