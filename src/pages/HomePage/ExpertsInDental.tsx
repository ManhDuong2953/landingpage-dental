// Nhập ảnh bác sĩ nha khoa và biểu tượng kiểm màu tím
import YoungAsianFemaleDentistImg from "../../assets/images/HomePage/young-asian-female-dentist.png";
import VioletCircleOk from "../../assets/images/HomePage/violet-circle-ok.svg";

// Component phần giới thiệu chuyên gia
const ExpertsInDental = () => {
  return (
    <section
      className="justify-center tablet:justify-between items-center gap-x-16 section-1200"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Nội dung bên trái */}
      <div
        className="flex flex-col gap-y-8"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {/* Phần tiêu đề và mô tả */}
        <div className="flex flex-col tablet:text-left text-center">
          <span className="section-small-title">Chuyên gia nha khoa</span>
          <h2 className="mt-4 mb-6 max-w-[590px]">
            Nha khoa hàng đầu từ những nha sĩ giỏi nhất tại Seattle
          </h2>

          {/* Hình ảnh hiển thị trên tablet và mobile */}
          <div
            className="tablet:hidden mt-8 mb-14 max-w-[550px]"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <img
              src={YoungAsianFemaleDentistImg}
              alt="Nữ nha sĩ trẻ châu Á"
              className="w-full min-w-60 h-auto object-cover"
            />
          </div>

          <p className="mx-auto tablet:mx-0 max-w-[510px] font-medium text-violet-dark/80">
            Với trình độ chuyên môn cao và kinh nghiệm dày dặn, đội ngũ bác sĩ của chúng tôi không chỉ giỏi về kỹ thuật mà còn tận tâm với từng nụ cười bạn trao gửi.
          </p>
        </div>

        {/* Danh sách đặc điểm nổi bật */}
        <ul
          className="flex flex-col items-center tablet:items-start gap-y-4 mx-auto tablet:mx-0 text-violet-dark/90"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <li className="flex items-center gap-x-3 whitespace-nowrap">
            <img src={VioletCircleOk} alt="" />
            <span>Đội ngũ nha sĩ chất lượng hàng đầu</span>
          </li>
          <li className="flex items-center gap-x-3 whitespace-nowrap">
            <img src={VioletCircleOk} alt="" />
            <span>Dịch vụ nha khoa hiện đại nhất</span>
          </li>
          <li className="flex items-center gap-x-3 whitespace-nowrap">
            <img src={VioletCircleOk} alt="" />
            <span>Giảm giá cho tất cả các điều trị nha khoa</span>
          </li>
        </ul>
      </div>

      {/* Hình ảnh bên phải, chỉ hiển thị ở màn hình lớn */}
      <div
        className="hidden tablet:block max-w-[550px]"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <img
          src={YoungAsianFemaleDentistImg}
          alt="Nữ nha sĩ trẻ châu Á"
          className="w-full min-w-60 h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ExpertsInDental;
