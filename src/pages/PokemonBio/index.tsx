import getData from "api/request/getData";
import PokemonRadarChart from "components/PokemonRadarChart";
import TypeTag from "components/TypeTag";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

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
  const [pokemon, setPokemon] = useState<any>({});
  const [loadingData, setLoadingData] = useState(true);
  const { id } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    const asyncRequest = async () => {
      const query = `{
        pokemon_v2_pokemon(where: {id: {_eq: ${id}}, pokemon_v2_pokemonstats: {}}) {
          id
          name
          weight
          height
          pokemon_v2_pokemonspecy {
            pokemon_v2_pokemonspecies {
              pokemon_v2_evolutionchain {
                pokemon_v2_pokemonspecies_aggregate {
                  nodes {
                    id
                  }
                }
              }
              pokemon_v2_pokemonspeciesflavortexts(offset: 0, limit: 1) {
                flavor_text
              }
            }
          }
          pokemon_v2_pokemonstats {
            base_stat
            pokemon_v2_stat {
              name
            }
          }
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }

      }
      `;
      const result = await getData(query);
      setPokemon(result.data.pokemon_v2_pokemon[0]);
      setLoadingData(false);
    };

    asyncRequest();
  }, [id]);
  console.log(pokemon);

  return (
    <>
      {!loadingData && (
        <Container>
          <LeftContainer
            type={pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
          >
            <button className="button icon-left" onClick={history.goBack}>
              Back
            </button>
            <PokemonIdRow>
              <PokemonId>#00{pokemon.id}</PokemonId>
              <PokemonName>{pokemon.name}</PokemonName>
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
              <PokemonRadarChart
                data={pokemon.pokemon_v2_pokemonstats}
                type={pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
              />
            </ChartContainer>
            <FlavorText>
              {
                pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspecies[0]
                  ?.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
              }
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
