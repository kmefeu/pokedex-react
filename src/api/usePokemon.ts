import { useEffect, useState, useCallback, useRef } from "react";

export interface detectedPokesType {
  name: string;
  url: string;
}

// usePokemons
// 1. Listagem SIMPLES de todos os Pokemon (nome)
// 2. Listagem DETALHADA de todos os Pokemon já exibidos na tela
// 3. Função para carregar mais detalhes de Pokemon

export const usePokemon = () => {
  const [detailedPokemonList, setDetailedPokemonList] = useState<any[]>([]);
  const [loadingPokemonList, setLoadingPokemonList] = useState<boolean>(true);
  const pokemonList = useRef<any[]>([]);
  const detailedPokemonCount = useRef<number>(0);

  const fetchDataToJson = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return await response.json();
  };

  const fetchPokemonDetails = useCallback(async () => {
    const offsetBase = 30;
    const offsetTarget = detailedPokemonCount.current + offsetBase;

    const detailedPokemonToFetch = pokemonList.current.slice(
      detailedPokemonCount.current,
      offsetTarget
    );
    detailedPokemonCount.current = offsetTarget;

    const detailedPokemon = await Promise.all(
      detailedPokemonToFetch.map((pokemon: any) => fetchDataToJson(pokemon.url))
    );

    return detailedPokemon;
  }, []);

  const loadMore = useCallback(async () => {
    const detailedPokemon = await fetchPokemonDetails();
    setDetailedPokemonList((previousState) => [
      ...previousState,
      ...detailedPokemon,
    ]);
  }, [fetchPokemonDetails]);

  useEffect(() => {
    async function initialLoad() {
      const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050";
      const { results } = await fetchDataToJson(url);

      pokemonList.current = results;

      const detailedPokemon = await fetchPokemonDetails();

      setDetailedPokemonList(detailedPokemon);
      setLoadingPokemonList(false);
    }
    initialLoad();
  }, [fetchPokemonDetails]);

  //console.log(detailedPokemonList);

  return {
    loadingPokemonList,
    setLoadingPokemonList,
    pokemonList,
    detailedPokemonList,
    loadMore,
  };
};

export default usePokemon;
