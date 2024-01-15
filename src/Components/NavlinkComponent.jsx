import React from "react";

const NavlinkComponent = ({ link }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-3">
      <link.icon className="text-white h-[20px] w-[20px]" />
      <h1 className="text-white text-xl font-semibold hover:cursor-pointer hover:underline underline-offset-8 duration-200">
        {link.name}
      </h1>
    </div>
  );
};

export default NavlinkComponent;
