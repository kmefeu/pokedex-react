import PokemonCardList from "components/PokemonCardList";
import SearchBar from "components/SearchBar";
import React from "react";
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
