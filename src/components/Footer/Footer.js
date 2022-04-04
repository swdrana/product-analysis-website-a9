import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark d-flex justify-content-between mt-5 pt-3 pb-2">
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
