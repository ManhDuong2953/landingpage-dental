import VioletButton from "../../components/UI/VioletButton";
import HeroImg from "../../assets/images/ServicesPage/two-dentists-and-a-patient.png";


const HeroSection = () => {

  return (
    <section
      className="flex justify-center items-center gap-x-10 bg-sky-light laptopM:mb-40 px-5 mobileM:px-6 py-10 laptopM:py-20 tabletM:pr-8 tabletM:pl-24 rounded-[48px]"
    >
      {/* Nội dung bên trái */}
      <div
        className="flex flex-col items-center tabletL:items-start tabletL:text-left text-center"
        data-aos="fade-down"
      >
        <h1 className="font-bold text-[32px] tabletL:text-[40px]">
          Điều trị tủy răng
        </h1>

        {/* Ảnh hiển thị trên tablet & mobile */}
        <div
          className="tabletL:hidden justify-center mt-12 mb-5 max-w-[730px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src={HeroImg}
            alt="Bác sĩ nha khoa đang điều trị cho bệnh nhân"
            className="shadow-md rounded-xl w-full min-w-60 h-auto object-cover"
          />
        </div>

        <p className="mt-8 mb-14 max-w-[490px] text-gray-700" data-aos="fade-up" data-aos-delay="400">
          Nhiều người thường e ngại khi nghe đến điều trị tủy, nhưng thực tế đây là phương pháp giúp loại bỏ cơn đau và bảo tồn răng thật hiệu quả. Chúng tôi cam kết quy trình nhẹ nhàng và không gây khó chịu cho bạn.
        </p>

        <div data-aos="fade-up" data-aos-delay="600">
          <VioletButton
            isLink={true}
            link="/landingpage-dental/services#book-appointment"
            addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileM:px-10 mobileM:py-5 tabletL:self-start"
          >
            Đặt lịch hẹn ngay
          </VioletButton>
        </div>
      </div>

      {/* Nội dung bên phải - ảnh lớn */}
      <div
        className="hidden tabletL:flex justify-center laptopM:-mb-52 max-w-[730px]"
        data-aos="zoom-in-left"
        data-aos-delay="200"
      >
        <img
          src={HeroImg}
          alt="Bác sĩ nha khoa đang điều trị cho bệnh nhân"
          className="shadow-md rounded-xl w-full min-w-60 h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
