// Nhập biểu tượng cho từng tính năng
import SafetyFirstIcon from "../../assets/images/HomePage/safety-first.svg";
import InsuranveAcceptedIcon from "../../assets/images/HomePage/insurance-accepted.svg";
import FullServiceIcon from "../../assets/images/HomePage/full-service-dentistry.svg";
import NoJudgmentIcon from "../../assets/images/HomePage/no-judgment-ever.svg";

// Mảng các tính năng đặc biệt
const features = [
  {
    img: SafetyFirstIcon,
    title: "An toàn là trên hết",
    desc: "Chúng tôi luôn đặt sự an toàn của bạn lên hàng đầu với quy trình vô trùng nghiêm ngặt và kiểm tra sức khỏe định kỳ.",
  },
  {
    img: InsuranveAcceptedIcon,
    title: "Chấp nhận bảo hiểm",
    desc: "Hỗ trợ nhiều loại bảo hiểm nha khoa phổ biến như Delta Dental, Aetna, Cigna để bạn yên tâm điều trị.",
  },
  {
    img: FullServiceIcon,
    title: "Dịch vụ nha khoa toàn diện",
    desc: "Từ thăm khám định kỳ đến cấy ghép, tẩy trắng hay phục hình – chúng tôi đáp ứng mọi nhu cầu nha khoa.",
  },
  {
    img: NoJudgmentIcon,
    title: "Không phán xét",
    desc: "Chúng tôi luôn chào đón mọi bệnh nhân với sự thấu hiểu và đồng hành – không xét nét hay phê phán.",
  },
];

// Component phần tính năng nổi bật
const FeaturesSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-y-14 bg-violet-light px-6 tablet:px-12 pt-20 pb-16 rounded-[48px]"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Nội dung phía trên */}
      <div
        className="flex flex-col mobileXL:text-left text-center"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <span className="section-small-title">Tính năng</span>
        <h2 className="mt-4 mb-6">Chăm sóc nha khoa hiện đại, tận tâm và khác biệt</h2>
        <p className="max-w-[848px] text-violet-dark/70">
          Chúng tôi không chỉ điều trị răng – mà còn mang đến trải nghiệm nha khoa thân thiện, chuyên nghiệp và đáng tin cậy, giúp bạn cảm thấy an tâm từ lần hẹn đầu tiên.
        </p>
      </div>

      {/* Nội dung phía dưới: các đặc điểm */}
      <div
        className="gap-12 grid grid-cols-1 tabletL:grid-cols-2"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {features.map(({ img, title, desc }, index) => (
          <div
            key={title}
            className="flex mobileXL:flex-row flex-col items-center gap-6 mobileXL:text-left text-center"
            data-aos="zoom-in"
            data-aos-delay={`${300 + index * 100}`}
            data-aos-duration="800"
          >
            <img src={img} alt={title} className="w-24 h-auto object-cover" />

            <div className="flex flex-col gap-y-2">
              <h3>{title}</h3>
              <p className="tabletL:max-w-72 text-violet-dark/60">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
