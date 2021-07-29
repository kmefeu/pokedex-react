import useInfiniteScroll from "api/hook/useInfiniteScroll";
import InfiniteScrollTrigger from "components/InfiniteScrollTrigger";
import PokemonCard from "components/PokemonCard";
import { PokemonCardListContainer } from "./styles";
import { scrollDirectionEnum } from "shapes/enum/scrollDirectionEnum";

const PokemonCardList: React.FC = () => {
  const {
    setScrollDirection,
    setLoadCalls,
    slicedDetailedPokemonList,
    loadingDetailedPokemonList,
  } = useInfiniteScroll();

  return (
    <PokemonCardListContainer>
      {slicedDetailedPokemonList?.map((item: any, index: number) => (
        <PokemonCard
          key={index}
          name={item.name}
          number={item.id}
          types={item.pokemon_v2_pokemontypes}
          sprites={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" +
            item.id +
            ".gif"
          }
        />
      ))}

      <InfiniteScrollTrigger
        functionToTrigger={() => {
          setScrollDirection(scrollDirectionEnum.down);
          setLoadCalls((previousState) => previousState + 1);
        }}
        loading={loadingDetailedPokemonList}
      />
    </PokemonCardListContainer>
  );
};

export default PokemonCardList;
