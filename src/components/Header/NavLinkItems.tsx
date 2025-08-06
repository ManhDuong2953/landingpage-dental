import { NavLink } from "react-router-dom";

type NavLinkItemsProps = {
  hideMobileMenu?: () => void;
};

const navItemsList = [
  { link: "/landingpage-dental/about", name: "Về chúng tôi" },
  { link: "/landingpage-dental/blog", name: "Khách hàng" },
  { link: "/landingpage-dental/services", name: "Dịch vụ" },
  { link: "/landingpage-dental/contact", name: "Liên hệ với chúng tôi" },
];

const NavLinkItems = ({ hideMobileMenu }: NavLinkItemsProps) => {
  return (
    <>
      {navItemsList.map(({ link, name }) => (
        <NavLink
          to={link}
          key={name}
          onClick={hideMobileMenu}
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          {name}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinkItems;
