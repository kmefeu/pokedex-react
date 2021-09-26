import React, { useEffect } from "react";
import useSearch from "api/hook/useSearch";
import PokemonCardList from "components/PokemonCardList";
import PokemonSearchCardListList from "components/PokemonSearchCardList";
import SearchBar from "components/SearchBar";
import { PokedexContainer } from "./styles";

const Pokedex: React.FC = () => {
  const { isInputEmpty } = useSearch();
  return (
    <PokedexContainer>
      <SearchBar />
      {isInputEmpty ? <PokemonCardList /> : <PokemonSearchCardListList />}
    </PokedexContainer>
  );
};

export default Pokedex;
