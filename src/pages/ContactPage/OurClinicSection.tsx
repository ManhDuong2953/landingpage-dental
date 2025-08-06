import ClinicImg1 from "../../assets/images/ContactPage/clinic-img-1.png";
import ClinicImg2 from "../../assets/images/ContactPage/clinic-img-2.png";
import MapImg from "../../assets/images/ContactPage/map-img.png";

const addresses = [
  {
    imgClinic: ClinicImg1,
    nameClinic: "Phòng khám chính - NekCare",
    address: "35 West Dental Street, California 1004",
    key: "a1",
  },
  {
    imgClinic: ClinicImg2,
    nameClinic: "Chi nhánh 2 - NekCare",
    address: "88 East Smile Avenue, California 2002",
    key: "b2",
  },
];

const OurClinicSection = () => {
  return (
    <section className="flex flex-col items-center px-4 tablet:px-0 text-center">
      {/* titles */}
      <span className="section-small-title" data-aos="fade-up">
        Hệ thống phòng khám
      </span>
      <h2 className="mt-4 mb-16 max-w-[580px]" data-aos="fade-up" data-aos-delay="100">
        Đến trực tiếp phòng khám của chúng tôi để trải nghiệm dịch vụ nha khoa hàng đầu
      </h2>

      {/* bottom content */}
      <div className="flex flex-wrap justify-center gap-10">
        {addresses.map(({ imgClinic, nameClinic, address, key }, index) => (
          <div
            key={key}
            className="flex flex-col items-center gap-y-6 p-4 pb-6 border border-[#eee] rounded-[2rem] w-full max-w-[420px]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* image and map */}
            <div className="flex justify-center gap-x-4 max-h-[250px]">
              <div className="max-w-64">
                <img
                  src={imgClinic}
                  alt={`Phòng khám - ${address}`}
                  className="rounded-l-[2rem] w-full min-w-[160px] h-full object-cover"
                />
              </div>

              {/* map image */}
              <div className="max-w-36">
                <img
                  src={MapImg}
                  alt="Bản đồ vị trí"
                  className="rounded-r-[2rem] w-full min-w-[80px] h-full object-cover"
                />
              </div>
            </div>

            {/* address */}
            <p className="flex flex-col gap-y-2">
              <span className="font-bold text-violet-dark text-lg">
                {nameClinic}
              </span>
              <span className="font-medium text-violet-dark/70">
                {address}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClinicSection;
