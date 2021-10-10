import React, { useContext } from "react";
import InfiniteScrollTrigger from "components/InfiniteScrollTrigger";
import PokemonCard from "components/PokemonCard";
import { PokemonCardListContainer } from "./styles";
import PokedexContext from "context/PokedexContext";

const PokemonSearchCardListList: React.FC = () => {
  const { searchList, loading } = useContext(PokedexContext);

  const getSprite = (id: string) => {
    let number = parseInt(id);
    if (number < 650) {
      return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" +
        id +
        ".gif"
      );
    }
    if (number < 10022) {
      return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
        id +
        ".png"
      );
    }
    if (number > 10023) {
      return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
        id +
        ".png"
      );
    }
    return (
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
      id +
      ".png"
    );
  };
  return (
    <PokemonCardListContainer>
      {searchList?.map((item: any, index: number) => (
        <PokemonCard
          loading={loading}
          LoadingIndex={index}
          key={index}
          name={item.name}
          id={item.id}
          types={item.pokemon_v2_pokemontypes}
          sprites={getSprite(item.id)}
        />
      ))}

      <InfiniteScrollTrigger functionToTrigger={() => {}} loading={loading} />
    </PokemonCardListContainer>
  );
};

export default PokemonSearchCardListList;
