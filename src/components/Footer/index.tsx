import { Link } from "react-router-dom";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import DentalistBlackLogo from "../../assets/svg/dentalist-black.svg";
import PhoneIcon from "../../assets/svg/contact-phone.svg";
import ClockIcon from "../../assets/svg/clock.svg";
import LocationIcon from "../../assets/svg/location.svg";

const Footer = () => {
  return (
    <footer className="bg-violet-dark mt-36 px-5 pt-24 pb-7 text-white">
      {/* container */}
      <div className="flex flex-col mx-auto w-full max-w-screen-laptopM">
        {/* A - 3 lists */}
        <div
          className="flex tablet:flex-row flex-col tablet:justify-between items-center tablet:items-start gap-x-8 gap-y-12 tablet:text-left text-center"
        >
          {/* 1 - logo, overview, follow... */}
          <div className="flex flex-col items-center tablet:items-start">
            <Link
              to="/landingpage-dental"
              className="active:scale-[.98] duration-300"
            >
              <img
                src={DentalistBlackLogo}
                alt="Dentalist"
                className="w-[152px] min-w-[120px] h-auto"
              />
            </Link>

            <p
              className="mt-6 tablet:mt-8 mb-8 tablet:mb-16 max-w-[464px] laptop:max-w-[520px] text-white/70 text-base laptop:text-lg"
            >
              Dental Care Seattle is a top-rated local practice for cosmetic,
              preventative, and restorative dentistry on First Hill.
            </p>

            <div className="flex flex-col gap-y-4 tablet:gap-y-6">
              <p className="font-bold text-white/70 text-sm uppercase">
                Follow us on
              </p>
              <div className="flex justify-between items-center">
                <Link to="" className="hover:text-violet-hover duration-300">
                  <RiFacebookFill size={24} className="-mx-1" />
                </Link>

                <Link to="" className="hover:text-violet-hover duration-300">
                  <RiTwitterFill size={24} />{" "}
                </Link>

                <Link to="" className="hover:text-violet-hover duration-300">
                  <RiInstagramLine size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* 2 - Quick Links */}
          <ul className="flex flex-col gap-y-6 text-base laptop:text-lg whitespace-nowrap">
            <li className="font-bold text-white/70 uppercase">Quick Links</li>

            <li className="hover:text-violet-hover duration-300">
              <Link to="/landingpage-dental/about" className="block">
                About Us
              </Link>
            </li>
            <li className="hover:text-violet-hover duration-300">
              <Link to="/landingpage-dental/services" className="block">
                Dental Services
              </Link>
            </li>
            <li
              className="hover:text-violet-hover duration-300 cursor-pointer"
            >
              Dentist
            </li>
            <li className="hover:text-violet-hover duration-300">
              <Link to="/landingpage-dental/blog" className="block">
                Blog
              </Link>
            </li>
            <li className="hover:text-violet-hover duration-300">
              <Link to="/landingpage-dental/about#faq" className="block">
                FAQs
              </Link>
            </li>
          </ul>

          {/* 3 - Contact & Information */}
          <ul
            className="flex flex-col gap-y-6 font-bold text-base laptop:text-lg whitespace-nowrap"
          >
            <li className="text-white/70 uppercase">Contact & Information</li>

            <li
              className="flex justify-center tablet:justify-start items-center gap-x-6"
            >
              <img
                src={PhoneIcon}
                alt="phone number"
                className="hidden tablet:block w-9 laptop:w-16 h-auto"
              />
              <p className="flex flex-col gap-y-1">
                <span className="text-white/70 text-sm laptop:text-base">
                  Phone Number
                </span>
                <span className="font-bold text-white">+088 123 654 987</span>
              </p>
            </li>

            <li
              className="flex justify-center tablet:justify-start items-center gap-x-6"
            >
              <img
                src={ClockIcon}
                alt="open hour"
                className="hidden tablet:block w-9 laptop:w-16 h-auto"
              />
              <p className="flex flex-col gap-y-1">
                <span className="text-white/70 text-sm laptop:text-base">
                  Open Hour
                </span>
                <span className="font-bold text-white">
                  09:00 AM - 18:00 PM
                </span>
              </p>
            </li>

            <li
              className="flex justify-center tablet:justify-start items-center gap-x-6"
            >
              <img
                src={LocationIcon}
                alt="location"
                className="hidden tablet:block w-9 laptop:w-16 h-auto"
              />
              <p className="flex flex-col gap-y-1">
                <span className="text-white/70 text-sm laptop:text-base">
                  Clinic Address
                </span>
                <span className="font-bold text-white whitespace-normal">
                  35 West Dental Street California 1004
                </span>
              </p>
            </li>
          </ul>
        </div>

        {/* B - ©Dentalist. All Right Reserved, terms of use... */}
        <div
          className="flex tablet:flex-row flex-col justify-between gap-y-4 mt-28 font-medium text-white text-base tablet:text-left text-center"
        >
          <p className="flex-grow text-white/70">
            ©Dentalist. All Right Reserved
          </p>
          <div
            className="flex mobileM:flex-row flex-col justify-center gap-y-3 mobileM:gap-x-16 -order-1 tablet:order-1 mobileM:text-left text-center"
          >
            <span className="hover:text-violet-hover duration-300 cursor-pointer">
              Terms of Use
            </span>
            <span className="hover:text-violet-hover duration-300 cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
