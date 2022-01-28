import React from "react";

import header from "../../assets/ilustra_header.svg";
import Search from "./components/Search";
import Suggestions from "./components/Suggestions";

export default function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <h1>¡Inspirate y busca los mejores GIFS!</h1>
        <img src={header} alt="header_illustration" />
      </div>
      <Search />
      <Suggestions />
    </div>
  );
}
