import { useState, useEffect } from "react";
import useInfiniteScroll from "hook/useInfiniteScroll";
import InfiniteScrollTrigger from "components/InfiniteScrollTrigger";
import PokemonCard from "components/PokemonCard";
import { PokemonCardListContainer } from "./styles";
import LoadingPokemonCard from "components/PokemonCard/LoadingPokemonCard";

const PokemonCardList: React.FC = () => {
  const { setLoadCalls, pokemonList, loadingPokemonList, offset } =
    useInfiniteScroll();

  const [skeleton, setSkeleton] = useState<number[]>([]);
  const generateSkeleton = () => {
    for (let i = 0; i < offset; i++) {
      setSkeleton((s) => [...s, i]);
    }
  };

  useEffect(() => {
    generateSkeleton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {pokemonList?.map((item: any, index: number) => (
        <PokemonCard
          loading={loadingPokemonList}
          LoadingIndex={index}
          key={index}
          name={item.name}
          id={item.id}
          types={item.pokemon_v2_pokemontypes}
          sprites={getSprite(item.id)}
        />
      ))}
      {loadingPokemonList &&
        skeleton.map((id: number) => (
          <LoadingPokemonCard LoadingDelayBasis={id} />
        ))}
      <InfiniteScrollTrigger
        functionToTrigger={() => {
          setLoadCalls((previousState) => previousState + 1);
        }}
        loading={loadingPokemonList}
      />
    </PokemonCardListContainer>
  );
};

export default PokemonCardList;
