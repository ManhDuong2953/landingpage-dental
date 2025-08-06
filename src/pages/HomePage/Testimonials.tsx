import Avatar1 from "../../assets/images/HomePage/avatar-1.png";
import Avatar2 from "../../assets/images/HomePage/avatar-2.png";
import Avatar3 from "../../assets/images/HomePage/avatar-3.png";
import StarRating from "../../components/StarRating";

const testimonials = [
  {
    avatar: Avatar1,
    fullName: "Robert Fox",
    starCount: 5,
    content:
      "Tôi thực sự hài lòng với dịch vụ tại đây! Đội ngũ bác sĩ chuyên nghiệp, thân thiện và tư vấn rất kỹ lưỡng. Quá trình điều trị hoàn toàn không đau và tôi đã lấy lại được nụ cười tự tin.",
  },
  {
    avatar: Avatar2,
    fullName: "Albert Flores",
    starCount: 5,
    content:
      "Lần đầu tiên đến phòng khám mà cảm giác như ở nhà vậy. Không gian sạch sẽ, hiện đại. Tôi đã làm răng sứ tại đây và kết quả vượt mong đợi. Cảm ơn đội ngũ rất nhiều!",
  },
  {
    avatar: Avatar3,
    fullName: "Bessie Cooper",
    starCount: 4,
    content:
      "Dịch vụ nhanh chóng, bác sĩ rất tận tâm và nhẹ nhàng. Tôi đến điều trị tủy và hoàn toàn bất ngờ vì không hề đau như tôi lo lắng. Sẽ quay lại nếu cần chăm sóc răng miệng tiếp theo!",
  },
];

const Testimonials = () => {
  return (
    <section
      className="flex flex-col items-center gap-y-14 bg-sky-light px-5 mobileL:px-24 pt-20 pb-20 rounded-[48px]"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* title, paragraph */}
      <div
        className="flex laptop:flex-row flex-col laptop:justify-between items-center gap-x-14 gap-y-12 laptop:text-left text-center"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="flex flex-col gap-y-4">
          <span className="section-small-title">Cảm nhận khách hàng</span>
          <h2 className="max-w-[488px]">Khách hàng nói gì về chúng tôi</h2>
        </div>

        <p className="max-w-[480px]">
          Chúng tôi tự hào khi mang lại những trải nghiệm tích cực và dịch vụ
          nha khoa đáng tin cậy cho hàng ngàn khách hàng mỗi năm.
        </p>
      </div>

      {/* testimonials */}
      <div className="flex laptop:flex-row flex-col justify-center items-center gap-x-5 gap-y-20 laptopM:gap-x-10 mt-10">
        {testimonials.map(({ avatar, fullName, starCount, content }, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-y-6 bg-white shadow-sm px-6 pb-8 rounded-[2rem] min-w-60 max-w-[480px]"
            data-aos="fade-up"
            data-aos-delay={200 + index * 200}
            data-aos-duration="1000"
          >
            <img
              src={avatar}
              alt={fullName}
              className="box-content -mt-10 border-8 border-sky-light rounded-full w-20 h-20 object-cover"
            />

            {/* fullname and paragraph */}
            <div className="flex flex-col items-center gap-y-2 text-center">
              <span className="font-bold text-violet-dark text-lg -tracking-[0.4px]">
                {fullName}
              </span>
              <p className="text-base">{content}</p>
            </div>

            {/* star rating */}
            <div className="flex items-center gap-x-2 whitespace-nowrap">
              <StarRating starCount={starCount} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
