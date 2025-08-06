import FormBookAppointment from "../FormBookAppointment";
import LocationIcon from "../../assets/images/HomePage/location.svg";
import MapImg from "../../assets/images/HomePage/map-img.png";

const BookAppointment = () => {
  return (
    <section
      className="flex laptop:flex-row flex-col laptop:justify-between items-center laptop:items-stretch gap-x-20 gap-y-32 mx-auto w-full max-w-[1200px]"
    >
      {/* Nội dung bên trái - bản đồ và địa chỉ */}
      <div className="relative order-1 laptop:order-[0]">
        {/* Bản đồ */}
        <div className="max-w-[550px] h-full">
          <img
            src={MapImg}
            alt="35 West Dental Street California 1004"
            className="rounded-[3rem] w-full h-full object-cover"
          />
        </div>

        {/* Địa chỉ */}
        <div
          className="right-7 bottom-7 left-7 absolute flex mobileM:flex-row flex-col items-center gap-x-7 gap-y-3 bg-white shadow-sm p-6 rounded-[2rem] mobileM:text-left text-center"
        >
          <img src={LocationIcon} alt="" className="max-w-[64px]" />
          <p className="max-w-[288px] font-bold text-violet-dark text-lg">
            35 Phố Nha Khoa Tây, California 1004
          </p>
        </div>
      </div>

      {/* Nội dung bên phải - tiêu đề và form */}
      <div>
        {/* Tiêu đề */}
        <div className="laptop:text-left text-center">
          <span id="book-appointment" className="section-small-title">
            Đặt lịch hẹn
          </span>
          <h2 className="mt-4 mb-6">Trải nghiệm chăm sóc tại NekCare thật tuyệt vời</h2>
          <p className="mx-auto laptop:mx-0 max-w-[620px]">
            Văn bản mẫu thường được sử dụng trong ngành đồ họa, in ấn và xuất bản
            để xem trước bố cục và hình ảnh.
          </p>
        </div>

        {/* Form đặt lịch hẹn */}
        <FormBookAppointment addStylesToForm="mt-12" />
      </div>
    </section>
  );
};

export default BookAppointment;
