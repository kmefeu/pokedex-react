import { allPokemonIdQuery } from "api/querys/allPokemonIdQuery";
import getData from "api/request/getData";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const UsePokedexNavigation = () => {
  const [idList, setIdList] = useState<any>([{}]);
  const [listLength, setListLength] = useState(0);
  const [loadingList, setLoadingList] = useState(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const history = useHistory();
  const { id } = useParams<any>();

  const ChangePage = useCallback(
    (event) => {
      if (loadingList || !currentIndex) return;
      if (event.keyCode === 39 && currentIndex < listLength - 1) {
        history.push("/pokemon/" + idList[currentIndex + 1]);
      } else if (event.keyCode === 37 && currentIndex !== 1) {
        history.push("/pokemon/" + idList[currentIndex - 1]);
      }
    },
    [loadingList, currentIndex, listLength, history, idList]
  );

  useEffect(() => {
    const asyncRequest = async () => {
      console.log("bateu na api");
      const result = await getData(allPokemonIdQuery);
      const list = result.data.pokemon_v2_pokemon.map((obj: any) => obj.id);
      const index = list.indexOf(parseInt(id));
      setIdList(list);
      setListLength(list.length);
      setCurrentIndex(index);
      setLoadingList(false);
    };

    asyncRequest();
  }, [id]);

  return {
    idList,
    loadingList,
    currentIndex,
    ChangePage,
  };
};

export default UsePokedexNavigation;
