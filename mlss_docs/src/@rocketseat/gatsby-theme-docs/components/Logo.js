import React from "react";
//import { withPrefix } from "gatsby";

// Path to the logo file on your project (we need withPrefix to get the correct path for deployed sites)
// import logo from "/static/banner.png";
const logoUrl =
  "https://images.squarespace-cdn.com/content/v1/5e176b36a659cc3920d4038c/1598711702923-U9G274MDT9BPOXBH2Q2L/Bumblekite_logomark_.png?format=1500w";

const msftlogoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg";

const Logo = () => {
  return (
    <>
      <div
        style={{
          paddingLeft: 0,
          paddingRight: 10,
          background: "white",
        }}
      >
        <a href="https://www.bumblekite.co/">
          <img src={logoUrl} alt="Bumblekite.co" style={{ width: 90 }} />
        </a>
      </div>

      <div
        style={{
          marginLeft: 0,
          paddingLeft: 0,
          paddingRight: 0,
          marginRight: 40,
          background: "white",
        }}
      >
        <a href="https://www.microsoft.com/">
          <img
            src={msftlogoUrl}
            alt="Logo"
            style={{ width: 128, margin: 5, paddingTop: 20 }}
          />
        </a>
      </div>
    </>
  );
};

export default Logo;
