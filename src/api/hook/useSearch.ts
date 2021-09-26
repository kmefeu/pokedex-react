import getData from "api/request/getData";
import React, { useState, useCallback, useEffect } from "react";

const useSearch = () => {
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [searchList, setSearchList] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const isNumeric = (n: any) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  const customSearch = useCallback(
    async (event) => {
      if (event.keyCode !== 13) return;
      setLoading(true);
      if (!isNumeric(inputValue)) {
        const nameQuery = `{
          pokemon_v2_pokemon(limit: 10, offset: 0, where: {name: {_regex: "${inputValue}"}}) {
            name
            id
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
          }
        }
        `;
        const {
          data: { pokemon_v2_pokemon },
        } = await getData(nameQuery);
        setSearchList(pokemon_v2_pokemon);
        setLoading(false);
        return;
      }
      const idQuery = `{
        pokemon_v2_pokemon(limit: 10, offset: 0, where: {id: {_eq: ${inputValue}}}) {
          name
          id
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
`;
      const {
        data: { pokemon_v2_pokemon },
      } = await getData(idQuery);
      setSearchList(pokemon_v2_pokemon);
      setLoading(false);
      return;
    },
    [inputValue, setLoading, setSearchList]
  );

  useEffect(() => {
    inputValue.length >= 1
      ? setIsInputEmpty(() => false)
      : setIsInputEmpty(() => true);
  }, [inputValue.length]);

  return {
    isInputEmpty,
    setIsInputEmpty,
    searchList,
    setSearchList,
    loading,
    setLoading,
    customSearch,
    inputValue,
    setInputValue,
  };
};

export default useSearch;
