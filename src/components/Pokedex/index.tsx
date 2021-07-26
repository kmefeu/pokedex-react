import React from "react";
import PokemonCardList from "../PokemonCardList";
import SearchBar from "../SearchBar";
import { PokedexContainer } from "./styles";

const Pokedex: React.FC = () => {
  return (
    <PokedexContainer>
      <SearchBar />
      <PokemonCardList />
    </PokedexContainer>
  );
};

export default Pokedex;
