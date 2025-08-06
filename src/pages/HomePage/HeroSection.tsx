import VioletButton from "../../components/UI/VioletButton";
import ContactDentalEmergency from "../../components/ContactDentalEmergency";
import HeroImg from "../../assets/images/HomePage/indoor-shot-happy-young-woman.png";
import DrSamanthaImg from "../../assets/images/HomePage/dr-samantha.png";

const HeroSection = () => {
  return (
    <section
      className="flex tabletL:flex-row flex-col justify-center items-center gap-x-10 gap-y-5 bg-[center_2rem] bg-hero-3-vectors bg-sky-light bg-no-repeat px-5 mobileM:px-6 pt-8 rounded-[48px]"
      data-aos="fade-in"
      data-aos-delay="0"
      data-aos-duration="600"
    >
      {/* Bên trái: Nội dung */}
      <div className="flex flex-col items-center tabletL:items-start mb-8 tabletL:text-left text-center">
        <h1
          className="mt-10 laptopM:mt-0 tabletL:mt-5 max-w-[516px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          Giao nụ cười của bạn cho chuyên gia
        </h1>

        <p
          className="mt-12 tabletL:mt-8 mb-14 max-w-xl"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          Tại phòng khám của chúng tôi, nụ cười của bạn luôn là ưu tiên hàng đầu.
          Với đội ngũ bác sĩ chuyên môn cao và trang thiết bị hiện đại,
          chúng tôi cam kết mang đến trải nghiệm nha khoa nhẹ nhàng, an toàn và hiệu quả.
        </p>

        <div
          className="flex flex-wrap-reverse justify-center tabletL:justify-between items-center gap-4"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          <VioletButton
            isLink={true}
            link="/landingpage-dental#book-appointment"
            addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileM:px-10 mobileM:py-5 self-start"
          >
            Đặt lịch hẹn
          </VioletButton>

          <ContactDentalEmergency />
        </div>
      </div>

      {/* Bên phải: hình ảnh */}
      <div
        className="relative flex justify-center self-end mx-auto tabletL:mx-0 w-auto mobileXL:w-[550px] h-auto mobileXL:h-[480px]"
        data-aos="zoom-in-up"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <img
          src={HeroImg}
          alt="Giao nụ cười của bạn cho chuyên gia"
          className="w-[full] min-w-60 h-auto mobileXL:h-full object-cover"
        />

        <div
          className="bottom-5 left-1/2 tabletL:left-0 absolute flex mobileL:flex-row flex-col items-center gap-x-5 gap-y-3 bg-white hover:shadow-[0_0_0_2px_#583fbc] active:shadow-none p-2 mobileM:p-3 mobileM:pr-4 mobileXL:pr-8 rounded-2xl mobileL:text-left text-center mobileL:whitespace-nowrap -translate-x-1/2 tabletL:translate-x-0 duration-300 cursor-pointer"
          data-aos="fade-in"
          data-aos-delay="1000"
          data-aos-duration="800"
        >
          <img
            src={DrSamanthaImg}
            alt="Bác sĩ Samantha Alice"
            className="w-[57px] h-[57px] object-none"
          />
          <p className="flex flex-col gap-y-1">
            <span className="font-bold text-violet-dark text-sm">
              Bác sĩ Samantha Alice
            </span>
            <span className="font-medium text-xs">Tư vấn viên</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
