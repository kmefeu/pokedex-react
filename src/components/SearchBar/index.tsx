import React, { useState } from "react";
import LoadingPokeBall from "assets/images/svg/loadingPokeball.svg";

import {
  SearchBarContainer,
  LoadingContainer,
  LoadingImage,
  InputField,
} from "./styles";

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  // TODO SEARCH FILTER
  // function handleSearch() {
  //   if (inputValue) {
  //     const filteredList = pokemonList.filter(pokemon => {
  //       return pokemon.name.includes(inputValue.toLowerCase());
  //     });

  //     setFilteredPokemonList(filteredList);
  //   }
  // }

  return (
    <SearchBarContainer>
      <LoadingContainer isFocus={inputFocus} inputLength={inputValue.length}>
        <LoadingImage src={LoadingPokeBall} />
      </LoadingContainer>
      <InputField
        type="text"
        onChange={(input) => setInputValue(input.target.value)}
        placeholder="
        Which Pokemon are you looking for ?"
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
