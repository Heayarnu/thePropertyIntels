import React from "react";
import NavLarge from "./navlarge";

function NavMain() {
  return (
    <nav className="max-md:hidden absolute top-0 w-full px-[2rem] lg:px-[6.3rem] ">
      <NavLarge />
    </nav>
  );
}

export default NavMain;
