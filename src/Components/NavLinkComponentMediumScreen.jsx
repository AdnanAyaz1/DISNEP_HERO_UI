import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { navLinks } from "../constants";
import NavlinkComponent from "./NavlinkComponent";

const NavLinkComponentMediumScreen = ({ link, index }) => {
  const [showBar, setShowBar] = useState(0);

  if (index < 3) {
    return (
      <link.icon className="text-white h-[20px] w-[20px] hover:cursor-pointer" />
    );
  }

  if (index == 3) {
    return (
      <div onClick={() => setShowBar((pre) => !pre)} className="relative">
        <HiDotsVertical className="text-white h-[20px] w-[20px] hover:cursor-pointer " />
        {showBar ? (
          <div className="absolute top-6 p-4 px-6 bg-[#131520]/90 z-[3]">
            {navLinks.map((link, index) => {
              if (index >= 3) {
                return (
                  <div className="flex gap-4 items-center " key={index}>
                    <NavlinkComponent link={link} />
                  </div>
                );
              }
            })}
          </div>
        ) : null}
      </div>
    );
  }
};

export default NavLinkComponentMediumScreen;
