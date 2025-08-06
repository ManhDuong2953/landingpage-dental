import React, { useState } from "react";

import InputForm from "../Form/InputForm";
import SelectForm from "../Form/SelectForm";
import VioletButton from "../UI/VioletButton";
import PhoneVioletIcon from "../../assets/images/HomePage/contact-phone-violet.svg";

// Dữ liệu của form đặt lịch hẹn
type BookAppointmentData = {
  name: string;        // Tên
  email: string;       // Email
  service: string;     // Dịch vụ
  department: string;  // Khoa
  message: string;     // Tin nhắn
};

// Props truyền vào component FormBookAppointment
type FormBookAppointmentProps = {
  addStylesToForm?: string; // Thêm class tùy chỉnh cho form
};

const FormBookAppointment = ({
  addStylesToForm = "",
}: FormBookAppointmentProps) => {
  const [appointmentData, setAppointmentData] = useState<BookAppointmentData>({
    name: "",
    email: "",
    service: "",
    department: "",
    message: "",
  });

  // Xử lý khi người dùng thay đổi input/select/textarea
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const field = e.target.name;
    const value = e.target.value;
    setAppointmentData({ ...appointmentData, [field]: value });
  };

  // Xử lý khi gửi form
  const handleSubmit = () => {
    console.log(JSON.stringify(appointmentData));
    // Có thể gọi API tại đây
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`flex flex-col gap-y-10 ${addStylesToForm}`}
      >
        {/* Các trường nhập liệu */}
        <div>
          {/* Họ tên, email, dịch vụ và khoa */}
          <div className="gap-x-10 gap-y-8 grid grid-cols-1 mobileL:grid-cols-2">
            <InputForm
              id="form-book-appointment-name"
              name="name"
              placeholder="Nhập họ tên của bạn..."
              label="Họ tên"
              onChange={handleChange}
              value={appointmentData.name}
            />
            <InputForm
              type="email"
              name="email"
              id="form-book-appointment-email"
              placeholder="Địa chỉ email của bạn..."
              label="Email"
              value={appointmentData.email}
              onChange={handleChange}
            />

            <SelectForm
              id="form-book-appointment-services"
              name="service"
              label="Dịch vụ"
              value={appointmentData.service}
              onChange={handleChange}
              options={[
                "Chọn dịch vụ",
                "Tẩy trắng răng",
                "Hàm giả",
                "Cấy ghép Implant",
                "Làm trắng",
                "Điều trị tủy",
              ]}
            />
            <SelectForm
              id="form-book-appointment-department"
              name="department"
              label="Khoa"
              value={appointmentData.department}
              onChange={handleChange}
              options={[
                "Chọn khoa",
                "Phẫu thuật & Phát triển",
                "Chẩn đoán & Sinh học",
                "Chăm sóc nha khoa tổng quát",
                "Khoa phục hồi",
              ]}
            />
          </div>

          {/* Tin nhắn */}
          <div className="flex flex-col gap-y-3 mt-8">
            <label
              htmlFor="form-book-appointment-message"
              className="font-bold text-sm uppercase leading-5 tracking-[8%]"
            >
              Tin nhắn
            </label>

            <textarea
              id="form-book-appointment-message"
              name="message"
              maxLength={1000}
              placeholder="Nhập nội dung tin nhắn của bạn..."
              value={appointmentData.message}
              required
              onChange={handleChange}
              className="focus:shadow-[0_0_0_2px_#583fbc] px-4 py-3 border border-[#eee] focus:border-transparent rounded-2xl outline-none min-h-48 font-medium text-violet-dark text-base duration-200 resize-none placeholder-primary"
            ></textarea>
          </div>
        </div>

        {/* Thông tin liên hệ và nút đặt lịch */}
        <div className="flex mobileL:flex-row flex-col flex-wrap justify-between tabletL:justify-between items-center gap-8">
          {/* Liên hệ */}
          <div className="flex items-center gap-x-4">
            <img src={PhoneVioletIcon} alt="" className="max-w-[64px]" />
            <div className="flex flex-col whitespace-nowrap">
              <span className="section-small-title">Hỗ trợ khẩn cấp 24/7</span>
              <span className="font-bold text-violet-dark">03 482 394 123</span>
            </div>
          </div>

          {/* Nút đặt lịch */}
          <VioletButton
            onClick={handleSubmit}
            addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileXL:px-10 mobileXL:py-5 mobileL:self-start"
          >
            Đặt lịch hẹn
          </VioletButton>
        </div>
      </form>
    </>
  );
};

export default FormBookAppointment;
