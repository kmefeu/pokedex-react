import React, { useRef, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard";
import { MainContainer, InfiniteScrollTrigger } from "./styles";
import { usePokemon } from "../../api/usePokemon";

const Home: React.FC = () => {
  const {
    loadingPokemonList,
    setLoadingPokemonList,
    detailedPokemonList,
    loadMore,
  }: any = usePokemon();

  const infiniteScrollTrigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        loadMore();
      }
    });

    if (infiniteScrollTrigger.current)
      intersectionObserver.observe(infiniteScrollTrigger.current);

    return () => intersectionObserver.disconnect();
  }, [loadMore]);

  return (
    <MainContainer>
      {detailedPokemonList.map((item: any, index: number) =>
        detailedPokemonList.length === index + 1 ? (
          <PokemonCard
            key={item.index}
            name={item.name}
            number={item.id}
            types={item.types}
            sprites={item.sprites.other["official-artwork"].front_default}
          />
        ) : (
          <PokemonCard
            key={item.index}
            name={item.name}
            number={item.id}
            types={item.types}
            sprites={item.sprites.other["official-artwork"].front_default}
          />
        )
      )}
      <InfiniteScrollTrigger ref={infiniteScrollTrigger} />
    </MainContainer>
  );
};

export default Home;
