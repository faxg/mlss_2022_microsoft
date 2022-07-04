import React from "react";
import { withPrefix } from "gatsby";

// Path to the logo file on your project (we need withPrefix to get the correct path for deployed sites)
// import logo from "/static/banner.png";
const logoUrl =
  "https://images.squarespace-cdn.com/content/v1/5e176b36a659cc3920d4038c/1598711702923-U9G274MDT9BPOXBH2Q2L/Bumblekite_logomark_.png?format=1500w";
const Logo = () => <img src={logoUrl} alt="Logo" style={{ width: 90 }} />;

export default Logo;
