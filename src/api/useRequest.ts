import { useCallback, useEffect, useState } from "react";

export interface detectedPokesType {
  name: string;
  url: string;
}

// CODE FLOW / TODO LIST
//  1 - GET ALL POKEMONS NAMES AND URL TO FETCH MORE INFO
//  2 - GET FIRST LOADED POKEMONS INFO TO SHOW SOME FIRST POKEMONS LOADED
//  3 - CONTROL AND LINSTEM TE CALLS TO FETCH MORE POKEMONS DETAIL INFO
// PLUS FEATURES
//  A - REUSE CODE AS MUCH AS POSSIBLE
//  B - ALLOW CODE PERSONALIZATION

// fetchData  => get api data for you
// detectAllPokemons => detect all pokemons name and url for you (call fetchData)
// detectedPokemons => is the place were all detected Pokemons were stored
// loadBase => is used to be a reference of pokemons already detailed
// offset => is the varible that store de amont of pokemons you want to detail by call
// loadTarget => is used to be a reference of pokemons you want to detail
// fistLoad => trig fetch data to get the first detailed pokemons (call fetchData)
// loadCalls => is the counter of how many times do you have called the api for detailed info
// loadMore => is the function that handle the calls for more detected pokemons

export const useDetectPokes = () => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [detectedPokes, setDetectedPokes] = useState<detectedPokesType[]>([]);
  const [caughtPokes, setCaughtPokes] = useState<any>([]);
  const [newCaughtPokes, setNewCaughtPokes] = useState<any>([]);
  const [loadBase, setLoadBase] = useState(0);
  const [loadTarget, setLoadTarget] = useState(0);
  const [loadCalls, setLoadCalls] = useState(0);
  const offset = 20;

  const loadMore = useCallback(async () => {
    setNewCaughtPokes(caughtPokes);

    for (
      setLoadBase(caughtPokes.length), setLoadTarget(loadBase + offset);
      loadBase < loadTarget;
      setLoadBase(loadBase + 1)
    ) {
      const newDetailedPokemon = await fetchData(detectedPokes[loadBase].url);
      setNewCaughtPokes(newCaughtPokes.push(newDetailedPokemon));
    }

    setCaughtPokes(newCaughtPokes);
  }, [loadCalls]);

  const initialLoad = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
    const { results } = await fetchData(url);
    setDetectedPokes(results);
  };

  const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return await response.json();
  };

  useEffect(() => {
    initialLoad();
  }, []);

  console.log(detectedPokes, caughtPokes, loadCalls);
  return { detectedPokes, caughtPokes, setLoadCalls };
};

export default useDetectPokes;
