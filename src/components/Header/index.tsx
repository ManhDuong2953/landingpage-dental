import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

import dentalistLogo from "../../assets/svg/NekCare.png";
import VioletButton from "../UI/VioletButton";
import NavLinkItems from "./NavLinkItems";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const openMobileMenu = () => setMobileMenu(true);
  const closeMobileMenu = () => setMobileMenu(false);

  // to add shadow on Header when scrolling
  const [showShadow, setShowShadow] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 20 ? setShowShadow(true) : setShowShadow(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [showShadow]);

  return (
    <>
      {/* MobileMenu */}
      <MobileMenu isOpen={mobileMenu} onClose={closeMobileMenu} />

      {/* Header itself */}
      <header
        className={
          showShadow
            ? `sticky top-0 bg-white/80 backdrop-blur-md z-30 pt-6 pb-8 px-5 
            shadow-[#0000002a_0px_2px_3px_0px] duration-300`
            : `sticky top-0 bg-white/80 backdrop-blur-md z-30 pt-6 pb-8 px-5 duration-300`
        }
      >
        <nav
          className="flex justify-between items-center gap-x-6 mx-auto w-full max-w-screen-laptopM min-h-12 whitespace-nowrap"
        >
          {/* site logo */}
          <Link
            to="/landingpage-dental"
            className="hover:opacity-70 active:scale-[.98] duration-300"
          >
            <img
              src={dentalistLogo}
              alt="NekCare"
              className="w-auto h-[96px] object-contain"
            />
          </Link>

          {/* nav-links */}
          <menu
            className="hidden tablet:flex justify-center items-center gap-x-5 laptop:gap-x-7 laptopM:gap-x-10 font-bold text-violet-dark text-base laptop:text-lg"
          >
            <NavLinkItems />
          </menu>

          {/* Book an appointment Button */}
          <VioletButton
            isLink={true}
            link="/landingpage-dental#book-appointment"
            addStyles="hidden laptopM:block text-sm laptop:text-base
            px-6 py-4 rounded-xl after:rounded-xl mr-5"
          >
            Đặt lịch hẹn ngay
          </VioletButton>

          {/* btn show mobile menu */}
          <button
            onClick={openMobileMenu}
            className="laptopM:hidden bg-violet hover:bg-white hover:shadow-[0_0_0_2.5px_#583fbc] active:shadow-[0_0_0_2.5px_#583fbc,#6523d766_0px_-50px_36px_-28px_inset] px-[10px] mobileM:px-3 py-2 rounded-xl text-white hover:text-violet text-xl tablet:text-xl mobileM:text-2xl laptop:text-3xl duration-300"
          >
            <CgMenuRight />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
