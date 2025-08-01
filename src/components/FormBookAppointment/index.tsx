import React, { useState } from "react";

import InputForm from "../Form/InputForm";
import SelectForm from "../Form/SelectForm";
import VioletButton from "../UI/VioletButton";
import PhoneVioletIcon from "../../assets/images/HomePage/contact-phone-violet.svg";

type BookAppointmentData = {
  name: string;
  email: string;
  service: string;
  department: string;
  message: string;
};

type FormBookAppointmentProps = {
  addStylesToForm?: string;
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const field = e.target.name;
    const value = e.target.value;
    setAppointmentData({ ...appointmentData, [field]: value });
  };

  const handleSubmit = () => {
    // processing here...
    console.log(JSON.stringify(appointmentData));
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`flex flex-col gap-y-10 ${addStylesToForm}`}
      >
        {/* form elements to enter text */}
        <div>
          {/* name, email, services and department */}
          <div className="gap-x-10 gap-y-8 grid grid-cols-1 mobileL:grid-cols-2">
            <InputForm
              id="form-book-appointment-name"
              name="name"
              placeholder="Enter your name..."
              label="Name"
              onChange={handleChange}
              value={appointmentData.name}
            />
            <InputForm
              type="email"
              name="email"
              id="form-book-appointment-email"
              placeholder="Your email address..."
              label="Email address"
              value={appointmentData.email}
              onChange={handleChange}
            />

            <SelectForm
              id="form-book-appointment-services"
              name="service"
              label="Services"
              value={appointmentData.service}
              onChange={handleChange}
              options={[
                "Select service",
                "Teeth Whitening",
                "Dentures",
                "Implants",
                "Whitening",
                "Root Canal",
              ]}
            />
            <SelectForm
              id="form-book-appointment-department"
              name="department"
              label="Department"
              value={appointmentData.department}
              onChange={handleChange}
              options={[
                "Select department",
                "Developmental & Surgical Sciences",
                "Diagnostic & Biological Sciences",
                "Primary Dental Care",
                "Restorative Sciences",
              ]}
            />
          </div>

          {/* message */}
          <div className="flex flex-col gap-y-3 mt-8">
            <label
              htmlFor="form-book-appointment-message"
              className="font-bold text-sm uppercase leading-5 tracking-[8%]"
            >
              Message
            </label>

            <textarea
              id="form-book-appointment-message"
              name="message"
              maxLength={1000}
              placeholder="Enter your message..."
              value={appointmentData.message}
              required
              onChange={handleChange}
              className="focus:shadow-[0_0_0_2px_#583fbc] px-4 py-3 border border-[#eee] focus:border-transparent rounded-2xl outline-none min-h-48 font-medium text-violet-dark text-base duration-200 resize-none placeholder-primary"
            ></textarea>
          </div>
        </div>

        {/* contact and btn to book appointment (submit) */}
        <div
          className="flex mobileL:flex-row flex-col flex-wrap justify-between tabletL:justify-between items-center gap-8"
        >
          {/* contact */}
          <div className="flex items-center gap-x-4">
            <img src={PhoneVioletIcon} alt="" className="max-w-[64px]" />
            <div className="flex flex-col whitespace-nowrap">
              <span className="section-small-title">Dental 24H Emergency</span>
              <span className="font-bold text-violet-dark">03 482 394 123</span>
            </div>
          </div>

          {/* btn to book an appointment */}
          <VioletButton
            onClick={handleSubmit}
            addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileXL:px-10 mobileXL:py-5 mobileL:self-start"
          >
            Book an appointment
          </VioletButton>
        </div>
      </form>
    </>
  );
};

export default FormBookAppointment;
