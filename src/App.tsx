import React from "react";
import "styles/reset.css";
import "styles/font.css";
import "styles/global.css";
import Routes from "routes";
import PokedexContext from "context/PokedexContext";
import useSearch from "hook/useSearch";

function App() {
  const {
    isInputEmpty,
    customSearch,
    inputValue,
    setInputValue,
    searchList,
    setSearchList,
    loading,
  } = useSearch();

  return (
    <PokedexContext.Provider
      value={{
        isInputEmpty,
        customSearch,
        inputValue,
        setInputValue,
        searchList,
        setSearchList,
        loading,
      }}
    >
      <Routes />
    </PokedexContext.Provider>
  );
}

export default App;
