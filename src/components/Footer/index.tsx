import { Link } from "react-router-dom";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import dentalistBlackLogo from "../../assets/svg/dentalist-black.svg";
import PhoneIcon from "../../assets/svg/contact-phone.svg";
import ClockIcon from "../../assets/svg/clock.svg";
import LocationIcon from "../../assets/svg/location.svg";

const Footer = () => {
  return (
    <footer className="bg-violet-dark mt-36 px-5 pt-24 pb-7 text-white">
      {/* container */}
      <div className="flex flex-col mx-auto w-full max-w-screen-laptopM">
        {/* A - 3 danh sách chính */}
        <div
          className="flex tablet:flex-row flex-col tablet:justify-between items-center tablet:items-start gap-x-8 gap-y-12 tablet:text-left text-center"
        >
          {/* 1 - logo, mô tả, mạng xã hội */}
          <div className="flex flex-col items-center tablet:items-start">
            <Link
              to="/landingpage-dental"
              className="active:scale-[.98] duration-300"
            >
              <img
                src={dentalistBlackLogo}
                alt="NekCare"
                className="w-[152px] min-w-[120px] h-auto"
              />
            </Link>

            <p
              className="mt-6 tablet:mt-8 mb-8 tablet:mb-16 max-w-[464px] laptop:max-w-[520px] text-white/70 text-base laptop:text-lg"
            >
              Dental Care Seattle là một trong những phòng khám hàng đầu tại địa phương chuyên về nha khoa thẩm mỹ, phòng ngừa và phục hồi, nằm tại khu First Hill.
            </p>

            <div className="flex flex-col gap-y-4 tablet:gap-y-6">
              <p className="font-bold text-white/70 text-sm uppercase">
                Theo dõi chúng tôi tại
              </p>
              <div className="flex justify-between items-center">
                <Link to="" className="hover:text-violet-hover duration-300">
                  <RiFacebookFill size={24} className="-mx-1" />
                </Link>
                <Link to="" className="hover:text-violet-hover duration-300">
                  <RiTwitterFill size={24} />
                </Link>
                <Link to="" className="hover:text-violet-hover duration-300">
                  <RiInstagramLine size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* 2 - Liên kết nhanh */}
          <ul className="flex flex-col gap-y-6 text-base laptop:text-lg whitespace-nowrap">
            <li className="font-bold text-white/70 uppercase">Liên kết nhanh</li>

            <li className="hover:text-violet-hover duration-300">
              <Link to="/landingpage-dental/about" className="block">
                Về chúng tôi
              </Link>
            </li>
            <li className="hover:text-violet-hover duration-300">
              <Link to="/landingpage-dental/services" className="block">
                Dịch vụ nha khoa
              </Link>
            </li>
            <li className="hover:text-violet-hover duration-300 cursor-pointer">
              Nha sĩ
            </li>
            <li className="hover:text-violet-hover duration-300">
              <Link to="/landingpage-dental/blog" className="block">
                Bài viết
              </Link>
            </li>
            <li className="hover:text-violet-hover duration-300">
              <Link to="/landingpage-dental/about#faq" className="block">
                Câu hỏi thường gặp
              </Link>
            </li>
          </ul>

          {/* 3 - Thông tin liên hệ */}
          <ul className="flex flex-col gap-y-6 font-bold text-base laptop:text-lg whitespace-nowrap">
            <li className="text-white/70 uppercase">Liên hệ & Thông tin</li>

            <li className="flex justify-center tablet:justify-start items-center gap-x-6">
              <img
                src={PhoneIcon}
                alt="Số điện thoại"
                className="hidden tablet:block w-9 laptop:w-16 h-auto"
              />
              <p className="flex flex-col gap-y-1">
                <span className="text-white/70 text-sm laptop:text-base">
                  Số điện thoại
                </span>
                <span className="font-bold text-white">+088 123 654 987</span>
              </p>
            </li>

            <li className="flex justify-center tablet:justify-start items-center gap-x-6">
              <img
                src={ClockIcon}
                alt="Giờ làm việc"
                className="hidden tablet:block w-9 laptop:w-16 h-auto"
              />
              <p className="flex flex-col gap-y-1">
                <span className="text-white/70 text-sm laptop:text-base">
                  Giờ làm việc
                </span>
                <span className="font-bold text-white">
                  09:00 - 18:00
                </span>
              </p>
            </li>

            <li className="flex justify-center tablet:justify-start items-center gap-x-6">
              <img
                src={LocationIcon}
                alt="Địa chỉ"
                className="hidden tablet:block w-9 laptop:w-16 h-auto"
              />
              <p className="flex flex-col gap-y-1">
                <span className="text-white/70 text-sm laptop:text-base">
                  Địa chỉ phòng khám
                </span>
                <span className="font-bold text-white whitespace-normal">
                  35 Phố Nha Khoa Tây, California 1004
                </span>
              </p>
            </li>
          </ul>
        </div>

        {/* B - Bản quyền, điều khoản, chính sách */}
        <div
          className="flex tablet:flex-row flex-col justify-between gap-y-4 mt-28 font-medium text-white text-base tablet:text-left text-center"
        >
          <p className="flex-grow text-white/70">
            ©NekCare. Đã đăng ký bản quyền.
          </p>
          <div
            className="flex mobileM:flex-row flex-col justify-center gap-y-3 mobileM:gap-x-16 -order-1 tablet:order-1 mobileM:text-left text-center"
          >
            <span className="hover:text-violet-hover duration-300 cursor-pointer">
              Điều khoản sử dụng
            </span>
            <span className="hover:text-violet-hover duration-300 cursor-pointer">
              Chính sách bảo mật
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
