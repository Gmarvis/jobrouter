import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLoayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo?
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact US</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLoayout;
