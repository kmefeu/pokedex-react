import React from "react";
import "styles/reset.css";
import "styles/font.css";
import "styles/global.css";
import Routes from "routes";
import PokedexContext from "context/PokedexContext";
import UsePokedexNavigation from "hook/usePokedexNavigation";
import useSearch from "hook/useSearch";

function App() {
  const { idList } = UsePokedexNavigation();
  const { isInputEmpty } = useSearch();

  return (
    <PokedexContext.Provider value={{ idList, isInputEmpty }}>
      <Routes />
    </PokedexContext.Provider>
  );
}

export default App;
