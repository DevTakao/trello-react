import React from "react";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";
import "./NavContainer.css";

function NavContainer() {
  return (
    <div>
      <PrimaryNav />
      <SecondaryNav />
    </div>
  );
}

export default NavContainer;
