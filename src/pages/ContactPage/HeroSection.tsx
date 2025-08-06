import FormBookAppointment from "../../components/FormBookAppointment";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center bg-sky-light tablet:mb-[420px] mobileM:px-5 pt-16 mobileM:pb-5 tablet:pb-0 rounded-[48px] text-center"
    >
      {/* Tiêu đề và mô tả */}
      <h1 className="whitespace-nowrap" data-aos="fade-up">
        Liên hệ với chúng tôi
      </h1>
      <p
        className="mt-8 mb-16 max-w-[550px] font-medium text-lg"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ sớm nhất để hỗ trợ đặt lịch hoặc tư vấn về dịch vụ.
      </p>

      {/* Form đặt lịch hẹn */}
      <FormBookAppointment
        addStylesToForm="bg-white pt-10 pb-8 px-4 mobileM:px-6 mobileXL:px-10 tablet:px-16 
        tabletL:pt-14 tabletL:pb-12 tabletL:px-24 rounded-[2rem] tablet:rounded-[3rem]
        text-left tablet:shadow-md tablet:-mb-[420px]
        w-full tablet:w-auto
        -mb-[2px] mobileM:mb-0"
        data-aos="fade-up"
        data-aos-delay="200"
      />
    </section>
  );
};

export default HeroSection;
