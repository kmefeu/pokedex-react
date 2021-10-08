import React, { useContext } from "react";
import PokemonCardList from "components/PokemonCardList";
import PokemonSearchCardListList from "components/PokemonSearchCardList";
import SearchBar from "components/SearchBar";
import { PokedexContainer } from "./styles";
import PokedexContext from "context/PokedexContext";

const Pokedex: React.FC = () => {
  const { isInputEmpty } = useContext(PokedexContext);
  console.log("pokedex" + isInputEmpty);

  return (
    <PokedexContainer>
      <SearchBar />
      {isInputEmpty ? <PokemonCardList /> : <PokemonSearchCardListList />}
    </PokedexContainer>
  );
};

export default Pokedex;
