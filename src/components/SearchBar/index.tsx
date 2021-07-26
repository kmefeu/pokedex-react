import React, { useState } from "react";
import usePokemon from "../../api/usePokemon";
import {
  SearchBarContainer,
  LoadingContainer,
  LoadingImage,
  InputField,
} from "./styles";

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState<Boolean>(false);

  return (
    <SearchBarContainer>
      <LoadingContainer>
        <LoadingImage />
      </LoadingContainer>
      <InputField
        type="text"
        onChange={(input) => setInputValue(input.target.value)}
        placeholder="
        Which Pokemon are you looking for ?"
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
