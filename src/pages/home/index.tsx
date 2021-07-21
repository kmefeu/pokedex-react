import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { MainContainer } from "./styles";
import { usePokemon } from "../../api/usePokemon";

const Home: React.FC = () => {
  const { loadingPokemonList, detailedPokemonList, loadMore }: any =
    usePokemon();

  return !loadingPokemonList ? (
    <MainContainer>
      {detailedPokemonList.map((item: any) => (
        <PokemonCard
          key={item.name}
          name={item.name}
          number={item.id}
          types={item.types}
          sprites={item.sprites.other["official-artwork"].front_default}
        />
      ))}
      <button type="button" onClick={loadMore}>
        Carregar Mais
      </button>
    </MainContainer>
  ) : null;
};

export default Home;
