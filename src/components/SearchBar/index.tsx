import React, { useState, useEffect, useContext } from "react";
import LoadingPokeBall from "assets/images/svg/loadingPokeball.svg";

import {
  SearchBarContainer,
  LoadingContainer,
  LoadingImage,
  InputField,
} from "./styles";

import PokedexContext from "context/PokedexContext";

const SearchBar: React.FC = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const { customSearch, inputValue, setInputValue } =
    useContext(PokedexContext);

  useEffect(() => {
    document.addEventListener("keydown", customSearch, false);
    return () => {
      document.removeEventListener("keydown", customSearch, false);
    };
  }, [customSearch]);

  return (
    <SearchBarContainer>
      <LoadingContainer isFocus={inputFocus} inputLength={inputValue.length}>
        <LoadingImage src={LoadingPokeBall} />
      </LoadingContainer>
      <InputField
        type="text"
        onChange={(input) => setInputValue(input.target.value.toLowerCase())}
        placeholder="
        Which Pokemon are you looking for ?"
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
