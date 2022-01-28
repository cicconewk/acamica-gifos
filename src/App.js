import React, { useState } from "react";

import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { GlobalContext } from "./helpers/context";
import { ENDPOINTS, API_KEY } from "./helpers/constants";
import useFetch from "./hooks/useFetch";

import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [search, setSearch] = useState("");

  const [defaultTrending, trendingLoading, trendingError] = useFetch(
    `${ENDPOINTS.TRENDING}&api_key=${API_KEY}`,
  );

  const [categoriesData, categoriesLoading, categoriesError] = useFetch(
    `${ENDPOINTS.CATERGORIES}&api_key=${API_KEY}`,
  );

  return (
    <GlobalContext.Provider
      value={{
        isDark,
        setIsDark,
        search,
        setSearch,
      }}
    >
      <div className={isDark ? "dark-background" : "light-background"}>
        <Navbar />
        <Header />
        <Container
          data={categoriesData ?? defaultTrending}
          isLoading={categoriesLoading || trendingLoading}
          isError={Boolean(categoriesError || trendingError)}
        />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
