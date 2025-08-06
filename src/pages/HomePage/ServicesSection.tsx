import SectionHeaderAndParagraph from "../../components/SectionHeaderAndParagraph";
import DenturesIcon from "../../assets/images/HomePage/dentures.svg";
import ImplantsIcon from "../../assets/images/HomePage/implants.svg";
import WhiteningIcon from "../../assets/images/HomePage/whitening.svg";
import RootCanalIcon from "../../assets/images/HomePage/root-canal.svg";

const services = [
  {
    img: DenturesIcon,
    service: "Hàm giả tháo lắp",
    color: "bg-sky-light",
    description:
      "Giải pháp phục hình linh hoạt giúp bạn ăn nhai dễ dàng và cải thiện thẩm mỹ nụ cười.",
  },
  {
    img: ImplantsIcon,
    service: "Cấy ghép Implant",
    color: "bg-violet-light",
    description:
      "Khôi phục răng đã mất bằng trụ titan bền chắc, mang lại cảm giác như răng thật.",
  },
  {
    img: WhiteningIcon,
    service: "Tẩy trắng răng",
    color: "bg-fuchsia-light",
    description:
      "Làm trắng răng an toàn, nhanh chóng, giúp bạn tự tin với nụ cười rạng rỡ.",
  },
  {
    img: RootCanalIcon,
    service: "Điều trị tủy",
    color: "bg-orange-light",
    description:
      "Loại bỏ viêm nhiễm tủy, bảo tồn răng thật và chấm dứt cơn đau kéo dài.",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="flex-col section-1200"
      data-aos="fade-in"
      data-aos-duration="500"
    >
      {/* title, paragraph */}
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
        <SectionHeaderAndParagraph
          category="Dịch vụ"
          title="Hãy tự tin với sức khỏe răng miệng của bạn"
          titleStyles="max-w-[425px]"
          paragraph="Chúng tôi mang đến các dịch vụ nha khoa toàn diện giúp bạn luôn cảm thấy thoải mái, an toàn và hài lòng trong suốt quá trình điều trị – từ kiểm tra định kỳ đến các phương pháp phục hình hiện đại."
        />
      </div>

      {/* list of services */}
      <div
        className="justify-items-center laptop:justify-items-stretch gap-10 grid grid-cols-1 laptop:grid-cols-4 mobileXL:grid-cols-2 mt-16 mb-14"
      >
        {services.map(({ img, service, color, description }, index) => (
          <div
            key={service}
            className="flex flex-col gap-y-6 hover:shadow-md p-3 mobileM:p-4 pb-6 mobileM:pb-8 border border-[#eee] rounded-[32px] max-w-[480px] duration-300 cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay={index * 150 + 200}
            data-aos-duration="800"
          >
            <div
              className={`${color} rounded-[32px] px-20 py-12 flex items-center justify-center`}
            >
              <img
                src={img}
                alt={service}
                className="min-w-[96px] min-h-[96px] object-cover"
              />
            </div>

            <div className="flex flex-col items-center gap-y-2 text-center">
              <h3>{service}</h3>
              <p className="text-violet-dark/60 text-base">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="group flex items-center self-center gap-x-4 bg-violet-light hover:bg-violet px-8 py-5 rounded-2xl font-bold text-violet hover:text-white duration-300 ease-in"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        Xem tất cả dịch vụ
        <svg className="group fill-none w-6 h-6">
          <circle
            cx="12"
            cy="12"
            r="12"
            className="fill-[#583fbc] group-hover:fill-white duration-300 ease-in"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11 8 4 4-4 4"
            className="stroke-[2] stroke-white group-hover:stroke-violet duration-300 ease-in"
          />
        </svg>
      </button>
    </section>
  );
};

export default ServicesSection;
