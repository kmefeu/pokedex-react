import usePokedexNavigation from "hook/usePokedexNavigation";
import usePokemonBio from "hook/usePokemonBio";
import StatusList from "components/StatusList";
import TypeTag from "components/TypeTag";
import React, { useEffect } from "react";
import RandomTextEffect from "utils/RandomTextEffect";
import NavigationButton from "components/NavigationButton";
import GoBack from "assets/images/svg/goBack.svg";
import ArrowLeft from "assets/images/svg/arrowLeft.svg";
import ArrowRight from "assets/images/svg/arrowRight.svg";

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
  NavigationRow,
} from "./styles";

const PokemonBio: React.FC = () => {
  const { ChangePage } = usePokedexNavigation();
  const { pokemon, loadingData } = usePokemonBio();

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
            <NavigationButton
              goTo={"/"}
              iconSrc={GoBack}
              alt="Go to homepage"
            />
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
            <NavigationRow>
              <NavigationButton
                goTo={"/"}
                iconSrc={ArrowLeft}
                alt="Go to homepage"
              />
              <NavigationButton
                goTo={"/"}
                iconSrc={ArrowRight}
                alt="Go to homepage"
              />
            </NavigationRow>
            <PokemonSpritesRow>
              <PokemonSprite src={getSprite(pokemon.id)} />
              <PokemonShadow src={getSprite(pokemon.id)} />
            </PokemonSpritesRow>
          </LeftContainer>
          <RightContainer>
            <ChartContainer>
              <StatusList
                data={pokemon.pokemon_v2_pokemonstats}
                type={pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
              />
            </ChartContainer>
            {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspecies[0]
              ?.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text && (
              <FlavorText>
                <RandomTextEffect
                  messages={[
                    pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspecies[0]?.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
                      // eslint-disable-next-line no-control-regex
                      .replace(/[\r\n]|+/gm, " ")
                      .replace("POKéMON", "pokémon"),
                  ]}
                />
              </FlavorText>
            )}
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
