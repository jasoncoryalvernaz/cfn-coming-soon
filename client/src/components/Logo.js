import React from "react";

import "../styles/Logo.css";

const Logo = ({ alt, src, spinSpeed }) => (
  <div className={`logo-container ${spinSpeed}`}>
    <img className="logo" alt={alt} src={src} />
  </div>
);

export default Logo;
