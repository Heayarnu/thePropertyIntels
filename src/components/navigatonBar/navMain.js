import React from "react";
import NavLarge from "./navlarge";

function NavMain() {
  return (
    <nav className="max-lg:hidden absolute top-0 w-full px-[6.3rem] ">
      <NavLarge />
    </nav>
  );
}

export default NavMain;
