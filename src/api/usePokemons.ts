import { useEffect, useState } from "react";

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
// loadCondutor => function responsible for slicing the detectedPokemons lits to fetch them for more detail

// estou usando o offest multiplicado pelo load calls para não ter quer percorrer a lista caughtPokes toda vez
// percorer uma lista muito longa pode ter um desempenho ruim

// eu dou um nome pra função pelo que ela me retorna ou pelo o que ela recebe como parametro ???

export const usePokemons = () => {
  const [detectedPokemons, setDetectedPokemons] = useState<detectedPokesType[]>(
    []
  );
  const [caughtPokemons, setCaughtPokemons] = useState<any>([]);
  const [newPokemonsToCaught, setNewPokemonsToCaught] = useState<any>([]);
  const [loadBase, setLoadBase] = useState<number>(0);
  const [loadTarget, setLoadTarget] = useState<number>(0);
  const [loadCalls, setLoadCalls] = useState<number>(0);
  const offset = 20;

  const loadConductor = async (results: any) => {
    setLoadBase(offset * loadCalls);
    setLoadTarget(loadBase + offset);
    detectedPokemons.slice(loadBase, loadTarget);
  };

  const loadDetailedInfo = async () => {
    Promise.all(
      newPokemonsToCaught.map((pokemon: any) => {
        return fetchData(pokemon.url);
      })
    ).then((newCaughtPokemons) => {
      setCaughtPokemons((state: any) => state.concat(newCaughtPokemons));
    });
  };

  const initialLoad = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";
    const { results } = await fetchData(url);
    setDetectedPokemons(results);
    await asyncList(results);
  };

  const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return await response.json();
  };

  const asyncList = async (results: any) => {
    await loadConductor(results);
    await loadDetailedInfo();
  };

  useEffect(() => {
    initialLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   asyncList();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loadBase]);

  console.log("--RESULT--");
  console.log("detectedPokemons", detectedPokemons);
  console.log("caughtPokemons", caughtPokemons);
  console.log("loadCalls", loadCalls);
  console.log("loadTarget", loadTarget);

  return {
    detectedPokemons,
    caughtPokemons,
    setLoadCalls,
  };
};

export default usePokemons;
