import pokemonCardQueryBuilder from "api/querys/pokemonCardQueryBuilder";
import getData from "api/request/getData";
import { useEffect, useState } from "react";

export const useInfiniteScroll = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [loadingPokemonList, setLoadingPokemonList] = useState(true);
  const [offset, setOffset] = useState(20);
  const [offsetTarget, setOffsetTarget] = useState(offset);
  const [offsetBase, setOffsetBase] = useState(0);
  const [loadCalls, setLoadCalls] = useState(0);

  const getPokemonCardsInfoBlock = async () => {
    let localBase = offsetBase;
    let localTarget = offsetTarget;
    const cardQuey = pokemonCardQueryBuilder(localBase, localTarget);
    const {
      data: { pokemon_v2_pokemon },
    } = await getData(cardQuey);

    setPokemonList((previousState) => [
      ...previousState,
      ...pokemon_v2_pokemon,
    ]);

    setOffsetBase(localBase + offset);
    setOffsetTarget(localTarget + offset);
  };

  useEffect(() => {
    setLoadingPokemonList(true);
    getPokemonCardsInfoBlock().then(() => setLoadingPokemonList(false));
  }, [loadCalls]);

  console.log(pokemonList);

  return {
    pokemonList,
    loadingPokemonList,
    offset,
    setLoadCalls,
    setOffset,
    setOffsetBase,
  };
};

export default useInfiniteScroll;
