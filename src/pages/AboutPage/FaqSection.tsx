import AccordionItem from "../../components/AccordionItem";

const FaqSection = () => {
  return (
    <section
      className="flex-col gap-y-16 section-1200"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Tiêu đề */}
      <div
        className="flex flex-col items-center gap-y-4 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span id="faq" className="section-small-title">
          Câu hỏi thường gặp
        </span>
        <h2>Những thắc mắc phổ biến từ khách hàng</h2>
      </div>

      {/* Accordion câu hỏi */}
      <div
        className="mx-auto [&>div:first-of-type]:border-t [&>div:first-of-type]:border-t-[#96a0b5] w-full max-w-[920px]"
      >
        <div data-aos="fade-up" data-aos-delay="200">
          <AccordionItem
            question="Tôi có phải trả phí khi yêu cầu báo giá không?"
            answer="Không, bạn không có bất kỳ nghĩa vụ hay chi phí nào khi yêu cầu nhận báo giá từ chúng tôi."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <AccordionItem
            question="Phòng khám cung cấp những dịch vụ nha khoa nào?"
            answer="Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa như khám tổng quát, nhổ răng, lấy cao răng, tẩy trắng, cấy ghép implant, niềng răng và phục hình răng sứ."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <AccordionItem
            question="Tôi có thể in thẻ bảo hiểm nha khoa của mình như thế nào?"
            answer="Bạn có thể đăng nhập vào cổng thông tin khách hàng và tải về hoặc in thẻ bảo hiểm trực tiếp từ đó."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <AccordionItem
            question="Tôi làm sao biết mức miễn thường áp dụng cho gói bảo hiểm của mình?"
            answer="Thông tin về mức miễn thường được hiển thị rõ trong hợp đồng bảo hiểm hoặc trên hệ thống khách hàng của chúng tôi."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <AccordionItem
            question="Nếu tôi chuyển nhà, có cần thay đổi nha sĩ không?"
            answer="Bạn không cần đổi nha sĩ nếu vẫn muốn tiếp tục điều trị tại hệ thống của chúng tôi. Tuy nhiên, chúng tôi có thể hỗ trợ chuyển hồ sơ nếu bạn muốn đến chi nhánh gần nơi ở mới hơn."
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
