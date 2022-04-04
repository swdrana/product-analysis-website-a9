import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark d-flex justify-content-between pt-5 pb-4">
        <p className="text-start text-white ps-5">
          Copyright © 2022 | Powered by{" "}
          <a href="https://www.facebook.com/swdrana">swdRana</a>
        </p>
        <p className="text-end pe-5">
          <a className="pe-2" href="https://www.youtube.com/swdrana">
            Youtube
          </a>
          <a className="pe-2" href="https://www.github.com/swdrana">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
