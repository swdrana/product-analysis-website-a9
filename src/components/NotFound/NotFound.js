import React from "react";
import "./NotFound.css";
import img from './../../images/404-error-with-a-tired-person-pana.svg'
const NotFound = () => {
  return (
    <div>
      <img src={img} alt="Error 404" className="error-img" />
    </div>
  );
};

export default NotFound;
