import usePokedexNavigation from "api/hook/usePokedexNavigation";
import usePokemonBio from "api/hook/usePokemonBio";
import StatusList from "components/StatusList";
import TypeTag from "components/TypeTag";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  FlavorText,
  Line,
  LeftContainer,
  PokemonId,
  PokemonIdRow,
  PokemonSpritesRow,
  PokemonStats,
  PokemonTypesRow,
  RightContainer,
  PokemonName,
  PokemonShadow,
  PokemonSprite,
  ChartContainer,
} from "./styles";

const PokemonBio: React.FC = () => {
  const history = useHistory();
  const { ChangePage } = usePokedexNavigation();
  const { pokemon, loadingData } = usePokemonBio();

  useEffect(() => {
    document.addEventListener("keydown", ChangePage, false);
    return () => {
      document.removeEventListener("keydown", ChangePage, false);
    };
  }, [ChangePage]);

  return (
    <>
      {!loadingData && (
        <Container>
          <LeftContainer
            type={pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
          >
            <button
              className="button icon-left"
              onClick={() => history.push("/")}
            >
              Back
            </button>
            <PokemonIdRow>
              <PokemonId>#{pokemon.id}</PokemonId>
              <PokemonName mode="single">
                {pokemon.name.replace(/-/gm, " ")}
              </PokemonName>
            </PokemonIdRow>
            <PokemonTypesRow>
              {pokemon.pokemon_v2_pokemontypes.map(
                (item: any, index: number) => (
                  <TypeTag type={item.pokemon_v2_type.name} key={index} />
                )
              )}
            </PokemonTypesRow>
            <PokemonSpritesRow>
              <PokemonSprite
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" +
                  pokemon.id +
                  ".gif"
                }
              />
              <PokemonShadow
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" +
                  pokemon.id +
                  ".gif"
                }
              />
            </PokemonSpritesRow>
          </LeftContainer>
          <RightContainer>
            <ChartContainer>
              <StatusList
                data={pokemon.pokemon_v2_pokemonstats}
                type={pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
              />
            </ChartContainer>
            <FlavorText>
              {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspecies[0]?.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
                .replace(/[\r\n]|+/gm, " ")
                .replace("POKéMON", "pokémon")}
            </FlavorText>
            <Line />
            <PokemonStats>
              <ul>
                <li>
                  <b>Weight:</b> {pokemon.weight / 10}Kg
                </li>
                <li>
                  <b>Height:</b> {pokemon.height / 10}m
                </li>
              </ul>
            </PokemonStats>
          </RightContainer>
        </Container>
      )}
    </>
  );
};

export default PokemonBio;
