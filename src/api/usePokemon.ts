import { useEffect, useState, useCallback, useRef } from "react";

export interface detectedPokesType {
  name: string;
  url: string;
}

// usePokemons
// 1. Listagem SIMPLES de todos os Pokemon (nome)
// 2. Listagem DETALHADA de todos os Pokemon já exibidos na tela
// 3. Função para carregar mais Pokemon

export const usePokemon = () => {
  const [loadingPokemonList, setLoadingPokemonList] = useState<boolean>(true);
  const pokemonList = useRef<any[]>([]);

  const [detailedPokemonList, setDetailedPokemonList] = useState<any[]>([]);
  const detailedPokemonCount = useRef<number>(0);

  const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return await response.json();
  };

  const fetchPokemonDetails = useCallback(async () => {
    const offset = detailedPokemonCount.current;
    detailedPokemonCount.current += 20;

    const detailedPokemonToFetch = pokemonList.current.slice(
      offset,
      detailedPokemonCount.current
    );

    const detailedPokemon = await Promise.all(
      detailedPokemonToFetch.map((pokemon: any) => fetchData(pokemon.url))
    );

    return detailedPokemon;
  }, []);

  const loadMore = useCallback(async () => {
    const detailedPokemon = await fetchPokemonDetails();
    setDetailedPokemonList((prevState) => [...prevState, ...detailedPokemon]);
  }, [fetchPokemonDetails]);

  useEffect(() => {
    async function initialLoad() {
      const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9999";
      const { results } = await fetchData(url);

      pokemonList.current = results;

      const detailedPokemon = await fetchPokemonDetails();

      setDetailedPokemonList(detailedPokemon);
      setLoadingPokemonList(false);
    }
    initialLoad();
  }, [fetchPokemonDetails]);

  console.log(detailedPokemonList);

  return {
    loadingPokemonList,
    pokemonList,
    detailedPokemonList,
    loadMore,
  };
};

export default usePokemon;
