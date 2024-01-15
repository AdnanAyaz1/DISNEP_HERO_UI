import { navLinks } from "../constants";
import logo from "../assets/Images/logo.png";
import NavlinkComponent from "./NavlinkComponent";
import person from "../assets/Images/person.jpeg";
import NavLinkComponentMediumScreen from "./NavLinkComponentMediumScreen";

const Header = () => {
  return (
    <div className="md:p-4 p-2 flex gap-2 items-center">
      {/* 1st div with logo */}
      <div className="md:w-[150px] w-[110px]">
        <img src={logo} alt="" className="h-full w-full object-contain" />
      </div>
      {/* 2nd div with links and profile image */}
      <div className="flex items-center justify-between flex-1 ">
        {/* links for large screen */}
        <div className="lg:flex items-center gap-8 hidden">
          {navLinks.map((link) => (
            <NavlinkComponent key={link.name} link={link} />
          ))}
        </div>
        {/* links for medium screen */}
        <div className="flex items-center gap-8 lg:hidden ">
          {navLinks.map((link, i) => {
            return (
              <NavLinkComponentMediumScreen
                key={link.name}
                link={link}
                index={i}
              />
            );
          })}
        </div>
        {/* profile img */}
        <img
          src={person}
          alt=""
          className="lg:h-[60px] lg:w-[60px] w-[40px] h-[40px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
