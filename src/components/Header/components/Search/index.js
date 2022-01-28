import React, { useContext } from "react";

import { GlobalContext } from "../../../../helpers/context";
import lightSearchIcon from "../../../../assets/icon-search.svg";
import darkSearchIcon from "../../../../assets/icon-search-mod-noc.svg";

export default function Search() {
  const { isDark, search, setSearch, autocomplete } = useContext(GlobalContext);
  return (
    <div className="search__container">
      <input
        type="text"
        className="search__input"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <button className="search__button">
        <img
          src={isDark ? darkSearchIcon : lightSearchIcon}
          alt="search_icon"
        />
      </button>
    </div>
  );
}
