import React, { useContext } from "react";

import lightLogo from "../../assets/logo-desktop.svg";
import darkLogo from "../../assets/logo-mobile-modo-noct.svg";
import { GlobalContext } from "../../helpers/context";

export default function Navbar() {
  const { isDark, setIsDark } = useContext(GlobalContext);

  return (
    <div className="navbar">
      <div>
        <img src={isDark ? darkLogo : lightLogo} alt="giphy-logo" />
      </div>
      <div>
        <button onClick={() => setIsDark(!isDark)}>modo {isDark}</button>
      </div>
    </div>
  );
}
