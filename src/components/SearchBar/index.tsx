import React, { useState } from "react";
import {
  SearchBarContainer,
  LoadingContainer,
  LoadingImage,
  InputField,
} from "./styles";

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <SearchBarContainer>
      <LoadingContainer isFocus={inputFocus} inputLength={inputValue.length}>
        <LoadingImage />
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
