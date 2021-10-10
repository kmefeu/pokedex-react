import { pokemonBioQueryBuilder } from "api/queries/pokemonBioQueryBuilder";
import getData from "api/request/getData";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsePokemonBio = () => {
  const [pokemon, setPokemon] = useState<any>({});
  const [loadingData, setLoadingData] = useState(true);
  const { id } = useParams<any>();

  useEffect(() => {
    const asyncRequest = async () => {
      const result = await getData(pokemonBioQueryBuilder(id));
      setPokemon(result.data.pokemon_v2_pokemon[0]);
      setLoadingData(false);
    };

    asyncRequest();
  }, [id]);

  return {
    pokemon,
    loadingData,
  };
};

export default UsePokemonBio;
