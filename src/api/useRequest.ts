// RESQUEST ALL POKEMONS NAME AND URL

import { useMemo } from "react";

type detectedPokesType = {
  data: Array<any>;
};

export const useDetectPokes = () => {
  const detectedPokes = useMemo(async () => {
    return await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.results;
      });
  }, []);
  console.log(detectedPokes);
  return { detectedPokes };
};
