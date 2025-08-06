import SontaneousPainIcon from "../../assets/images/ServicesPage/sontaneous-pain.svg";
import DiscolorationOfToothIcon from "../../assets/images/ServicesPage/discoloration-of-tooth.svg";
import MiddleNightPainIcon from "../../assets/images/ServicesPage/middle-night-pain.svg";
import TendernessInGumsIcon from "../../assets/images/ServicesPage/tenderness-in-gums.svg";
import ExtremeSensitivityIcon from "../../assets/images/ServicesPage/extreme-sensitivity.svg";

const symptoms = [
  {
    img: SontaneousPainIcon,
    title: "Đau tự phát",
    desc: "Đau răng xuất hiện bất chợt ngay cả khi bạn không ăn uống gì.",
  },
  {
    img: DiscolorationOfToothIcon,
    title: "Răng đổi màu",
    desc: "Răng trở nên tối màu hoặc bị đổi màu bất thường.",
  },
  {
    img: MiddleNightPainIcon,
    title: "Đau giữa đêm",
    desc: "Cơn đau nghiêm trọng đến mức khiến bạn tỉnh giấc vào ban đêm.",
  },
  {
    img: TendernessInGumsIcon,
    title: "Nướu sưng hoặc nhạy cảm",
    desc: "Cảm giác đau hoặc sưng ở vùng nướu xung quanh răng bị tổn thương.",
  },
  {
    img: ExtremeSensitivityIcon,
    title: "Nhạy cảm quá mức",
    desc: "Cảm giác buốt dữ dội khi ăn đồ nóng hoặc lạnh.",
  },
];

const SymptomsSection = () => {

  return (
    <section
      className="flex flex-col items-center gap-y-14 bg-orange-light px-6 laptop:px-24 tabletM:px-12 pt-20 pb-16 rounded-[48px]"
      data-aos="fade-up"
    >
      {/* Phần trên - tiêu đề */}
      <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
        <span className="section-small-title">Triệu chứng</span>
        <h2 className="mt-4 mb-6">Dấu hiệu bạn có thể cần điều trị tủy</h2>
        <p className="max-w-[848px] text-violet-dark/70">
          Nếu bạn đang gặp phải một trong những triệu chứng dưới đây, rất có thể tủy răng của bạn đã bị tổn thương và cần được điều trị kịp thời. Việc phát hiện sớm sẽ giúp bảo tồn răng thật và giảm đau hiệu quả.
        </p>
      </div>

      {/* Phần dưới - danh sách triệu chứng */}
      <div className="gap-12 grid grid-cols-1 tabletL:grid-cols-2" data-aos="fade-up" data-aos-delay="200">
        {symptoms.map(({ img, title, desc }, idx) => (
          <div
            key={title}
            className="flex mobileXL:flex-row flex-col items-center gap-6 mobileXL:text-left text-center"
            data-aos="fade-up"
            data-aos-delay={300 + idx * 100}
          >
            <img src={img} alt={title} className="w-24 h-auto object-cover" />

            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="tabletL:w-72 text-violet-dark/60">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SymptomsSection;
