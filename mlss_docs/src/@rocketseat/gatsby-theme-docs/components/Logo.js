import React from "react";
import { withPrefix } from "gatsby";

// Path to the logo file on your project (we need withPrefix to get the correct path for deployed sites)
import logo from "/static/banner.png";

const Logo = () => (
  <img src={withPrefix("/banner.png")} alt="Logo" style={{ width: 90 }} />
);

export default Logo;
