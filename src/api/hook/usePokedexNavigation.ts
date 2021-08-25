import { allPokemonIdQuery } from "api/querys/allPokemonIdQuery";
import getData from "api/request/getData";
import React, { useCallback, useMemo, useState } from "react";
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

  useMemo(() => {
    const getIdList = async () => {
      setLoadingList(true);
      console.log("bateu na api");
      const result = await getData(allPokemonIdQuery);
      const list = result.data.pokemon_v2_pokemon.map((obj: any) => obj.id);
      setIdList(list);
      setLoadingList(false);
    };
    getIdList();
  }, []);

  useMemo(() => {
    setListLength(idList.length);
    setCurrentIndex(idList.indexOf(parseInt(id)));
  }, [id, idList]);

  return {
    idList,
    loadingList,
    currentIndex,
    ChangePage,
  };
};

export default UsePokedexNavigation;
