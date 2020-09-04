import React from "react";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";
import "./NavContainer.css";

function NavContainer(props) {
  return (
    <div>
      <PrimaryNav isLoading={props.isLoading} />
      <SecondaryNav />
    </div>
  );
}

export default NavContainer;
