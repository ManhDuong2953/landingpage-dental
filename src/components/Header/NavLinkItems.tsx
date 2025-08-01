import { NavLink } from "react-router-dom";

type NavLinkItemsProps = {
  hideMobileMenu?: () => void;
};

const navItemsList = [
  { link: "/landingpage-dental/about", name: "About Us" },
  { link: "/landingpage-dental/blog", name: "New Patient" },
  { link: "/landingpage-dental/services", name: "Our Services" },
  { link: "/landingpage-dental/contact", name: "Contact Us" },
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
