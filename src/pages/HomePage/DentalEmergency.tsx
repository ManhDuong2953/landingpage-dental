// Nhập các thành phần cần thiết
import VioletButton from "../../components/UI/VioletButton"; // Nút màu tím
import DentalSurgeryImg from "../../assets/images/HomePage/patient-receiving-dental-treatment-1.png"; // Ảnh bệnh nhân điều trị

const DentalEmergency = () => {
  return (
    <section
      className="justify-center tablet:justify-between items-center gap-x-16 section-1200"
      data-aos="fade-in"
      data-aos-duration="500"
    >
      {/* Phần trái: hình ảnh hiển thị trên màn hình lớn */}
      <div
        className="hidden tablet:block max-w-[550px]"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <img
          src={DentalSurgeryImg}
          alt="Bệnh nhân đang điều trị nha khoa"
          className="w-full min-w-60 h-auto object-cover"
        />
      </div>

      {/* Phần phải: nội dung văn bản và nút */}
      <div
        className="flex flex-col items-center tablet:items-start tablet:text-left text-center"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <span className="section-small-title">Nha khoa khẩn cấp 24/7</span>

        <h2 className="mt-4 mb-6 max-w-[550px]">
          Điều trị nhẹ nhàng, thân thiện từ phòng khám địa phương của chúng tôi
        </h2>

        {/* Hình ảnh chỉ hiển thị trên tablet và mobile */}
        <div
          className="tablet:hidden mt-8 mb-14 max-w-[550px]"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="800"
        >
          <img
            src={DentalSurgeryImg}
            alt="Bệnh nhân đang điều trị nha khoa"
            className="w-full min-w-60 h-auto object-cover"
          />
        </div>

        <p
          className="mb-16 max-w-[510px]"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          Gặp sự cố về răng miệng bất ngờ? Chúng tôi luôn sẵn sàng hỗ trợ 24/7
          để xử lý nhanh chóng, an toàn và hiệu quả.
        </p>

        <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="800">
          <VioletButton
            isLink={true}
            link="/landingpage-dental#book-appointment"
            addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileM:px-10 mobileM:py-5 tablet:self-start"
          >
            Đặt lịch hẹn
          </VioletButton>
        </div>
      </div>
    </section>
  );
};

export default DentalEmergency;
