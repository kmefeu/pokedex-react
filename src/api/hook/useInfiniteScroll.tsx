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

  // AllPokemonCardInfo

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

  // InfiniteScroll Conductor
  useEffect(() => {
    console.log("Conductor");

    let localBase = offsetBase;
    let localTarget = offsetTarget;
    let localOffset = offset;

    setLoadingSlicedDetailedPokemonList(true);

    if (detailedPokemonList) {
      if (scrollDirection === scrollDirectionEnum.up) {
        setOffsetBase((previousState) => previousState - localOffset);
        localBase -= localOffset;
        console.log("Up");
      }
      if (scrollDirection === scrollDirectionEnum.down) {
        setOffsetTarget((previousState: any) => previousState + localOffset);
        localTarget += localOffset;
        console.log("Down");
      }
      console.log(localBase, localTarget);

      setSlicedDetailedPokemonList(
        detailedPokemonList?.slice(localBase, localTarget)
      );
      setLoadingSlicedDetailedPokemonList(false);
    }
  }, [loadCalls]);

  console.log("Sliced List", slicedDetailedPokemonList);

  return {
    slicedDetailedPokemonList,
    loadingSlicedDetailedPokemonList,
    setScrollDirection,
    loadingDetailedPokemonList,
    setLoadCalls,
  };
};

export default useInfiniteScroll;
