import { allPokemonCardQuery } from "api/querys/allPokemonCardQuery";
import getData from "api/request/getData";
import { useEffect, useState } from "react";
import scrollDirectionEnum from "shapes/enum/scrollDirectionEnum";

export const useInfiniteScroll = () => {
  const [detailedPokemonList, setDetailedPokemonList] = useState<any[]>();
  const [loadingDetailedPokemonList, setLoadingDetailedPokemonList] =
    useState(true);

  const [slicedDetailedPokemonList, setSlicedDetailedPokemonList] = useState<
    any[]
  >([]);
  const [
    loadingSlicedDetailedPokemonList,
    setLoadingSlicedDetailedPokemonList,
  ] = useState(true);

  const [loadCalls, setLoadCalls] = useState(0);
  const [offset, setOffset] = useState(20);
  const [offsetBase, setOffsetBase] = useState(0);
  const [offsetTarget, setOffsetTarget] = useState(offset);
  const [scrollDirection, setScrollDirection] = useState<scrollDirectionEnum>();

  const pokemonCardQueryBuilder = (
    queryOffsetBase: number,
    queryOffsetTarget: number
  ) => {
    return (
      `{
      pokemon_v2_pokemon(limit: ` +
      queryOffsetBase +
      `, offset: ` +
      queryOffsetTarget +
      `) {
            name
            id
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
          }
        }
      `
    );
  };

  useEffect(() => {
    const allPokemonCardsInfo = async () => {
      const {
        data: { pokemon_v2_pokemon },
      } = await getData(allPokemonCardQuery);
      setDetailedPokemonList(pokemon_v2_pokemon);
      setSlicedDetailedPokemonList(
        pokemon_v2_pokemon.slice(offsetBase, offsetTarget)
      );

      setLoadingDetailedPokemonList(false);
    };
    allPokemonCardsInfo();
  }, []);

  useEffect(() => {
    let localBase = offsetBase;
    let localTarget = offsetTarget;
    setLoadingSlicedDetailedPokemonList(true);

    if (detailedPokemonList) {
      if (scrollDirection === scrollDirectionEnum.down) {
        setOffsetTarget((previousState: any) => previousState + offset);
        localTarget += offset;
      }

      setSlicedDetailedPokemonList(
        detailedPokemonList?.slice(localBase, localTarget)
      );
      setLoadingSlicedDetailedPokemonList(false);
    }
  }, [loadCalls]);

  console.log(detailedPokemonList);

  return {
    slicedDetailedPokemonList,
    loadingSlicedDetailedPokemonList,
    setScrollDirection,
    loadingDetailedPokemonList,
    setLoadCalls,
    setOffset,
    setOffsetBase,
  };
};

export default useInfiniteScroll;
