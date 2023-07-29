import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Fount</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        perspiciatis incidunt porro quo fugit officiis nulla consequuntur
        ratione sequi pariatur.
      </p>
      <p>
        Go to the <Link to="/">homepage</Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
