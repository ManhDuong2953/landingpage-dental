import AuthorAvatarImg from "../../assets/images/BlogPost/author-avatar.png";
import ArticleCoverImg from "../../assets/images/BlogPost/article-cover.png";
import ArticleImg1 from "../../assets/images/BlogPost/article-img-1.png";
import ArticleImg2 from "../../assets/images/BlogPost/article-img-2.png";

const ArticleContent = () => {
  return (
    <section className="flex-col section-1200">
      {/* tiêu đề, tác giả và trích đoạn */}
      <div className="mb-16 tablet:pl-20" data-aos="fade-up">
        <span className="section-small-title">Công nghệ</span>
        <h2 className="mt-4 mb-8 max-w-[710px] leading-[1.3]">
          Công nghệ tiên tiến giúp nâng cao hiệu quả trong phẫu thuật nha khoa
        </h2>

        {/* tác giả */}
        <div className="flex gap-x-3">
          <img
            src={AuthorAvatarImg}
            alt="Robert Fox"
            className="rounded-full w-12 h-12 object-cover"
          />
          <p className="flex flex-col gap-y-2">
            <span className="font-black text-violet-dark text-base">Robert Fox</span>
            <span className="font-semibold text-violet-dark/70 text-xs">12 Tháng 8, 2021</span>
          </p>
        </div>

        {/* trích đoạn */}
        <p className="mt-8 max-w-[990px] font-medium text-base">
          Việc ứng dụng công nghệ kỹ thuật số và vật liệu tiên tiến trong nha khoa đang mang lại hiệu quả điều trị cao hơn, giảm đau và rút ngắn thời gian hồi phục cho bệnh nhân.
        </p>
      </div>

      {/* ảnh tiêu đề bài viết */}
      <img
        src={ArticleCoverImg}
        alt="Công nghệ mới giúp cải thiện quy trình phẫu thuật nha khoa"
        className="rounded-3xl w-full h-[320px] laptop:h-[600px] mobileXL:h-[480px] tabletL:h-[520px] object-cover"
        data-aos="fade-up"
        data-aos-delay="100"
      />

      {/* đoạn nội dung đầu tiên */}
      <div className="flex flex-col gap-y-6 mt-16 tablet:pl-20" data-aos="fade-up" data-aos-delay="200">
        <p className="max-w-[990px] text-base">
          Trong những năm gần đây, các thiết bị như máy quét kỹ thuật số, in 3D, và trí tuệ nhân tạo đã được ứng dụng rộng rãi trong nha khoa. Chúng giúp nha sĩ lên kế hoạch điều trị chính xác hơn, đồng thời nâng cao trải nghiệm của bệnh nhân.
        </p>

        <p className="max-w-[960px] text-base">
          Nhờ các công nghệ tiên tiến, nhiều ca điều trị như cấy ghép implant, chỉnh nha hay phục hình răng giờ đây diễn ra nhanh hơn, ít xâm lấn hơn và mang lại kết quả lâu dài.
        </p>
      </div>

      {/* tiêu đề phụ và nội dung */}
      <div className="flex flex-col mt-16 tablet:pl-20" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-4xl">Tác động của công nghệ đối với phẫu thuật nha khoa</h3>
        <p className="mt-6 mb-6 max-w-[990px] text-base">
          Việc sử dụng phần mềm mô phỏng 3D giúp bác sĩ phẫu thuật lập kế hoạch mổ chính xác đến từng milimet. Điều này giảm thiểu rủi ro và giúp phục hồi nhanh hơn.
        </p>
        <p className="max-w-[990px] text-base">
          Ngoài ra, các vật liệu sinh học mới như mô nhân tạo và khung titanium cũng đang được ứng dụng để tăng độ ổn định cho các ca phẫu thuật phức tạp.
        </p>
      </div>

      {/* hình ảnh minh họa */}
      <div
        className="flex mobileXL:flex-row flex-col items-center gap-x-10 gap-y-10 mt-12 tablet:pl-20"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="w-full mobileXL:max-w-[510px]">
          <img
            src={ArticleImg1}
            alt="Công nghệ trong phẫu thuật"
            className="rounded-2xl w-full min-w-[280px] h-[220px] mobileXL:h-[260px] tabletL:h-[300px] object-cover"
          />
        </div>
        <div className="-order-1 mobileXL:order-1 w-full mobileXL:max-w-[400px]">
          <img
            src={ArticleImg2}
            alt="Thiết bị hiện đại"
            className="rounded-2xl w-full min-w-[190px] h-[220px] mobileXL:h-[260px] tabletL:h-[300px] object-cover"
          />
        </div>
      </div>

      {/* trích dẫn nổi bật */}
      <p
        className="bg-gradient-to-r from-[#dbeffa] mx-auto mt-16 tablet:ml-20 p-6 mobileL:px-10 mobileL:py-12 border-l-[3px] border-l-violet max-w-[880px] font-bold text-violet-dark"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        “Ứng dụng công nghệ không chỉ nâng cao hiệu quả điều trị mà còn mở ra hướng đi mới cho ngành nha khoa hiện đại.”
      </p>

      {/* đoạn nội dung kết */}
      <div className="flex flex-col gap-y-8 mt-16 tablet:pl-20" data-aos="fade-up" data-aos-delay="600">
        <p className="max-w-[990px] text-base">
          Sự kết hợp giữa chuyên môn của bác sĩ và sức mạnh của công nghệ đang tạo ra sự thay đổi rõ rệt trong điều trị nha khoa – từ chẩn đoán đến phục hồi.
        </p>

        <p className="font-bold text-lg">
          <span className="text-violet-dark">Tài liệu liên quan:</span>{" "}
          <span className="text-violet">Tủy răng là gì và nguyên nhân gây viêm tủy?</span>
        </p>

        <p className="max-w-[990px] text-base">
          Nếu được ứng dụng đúng cách, công nghệ sẽ là công cụ đắc lực giúp bệnh nhân trải nghiệm dịch vụ nha khoa an toàn, nhanh chóng và chính xác hơn bao giờ hết.
        </p>
      </div>
    </section>
  );
};

export default ArticleContent;
