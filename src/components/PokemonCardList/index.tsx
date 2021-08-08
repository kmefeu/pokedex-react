import useInfiniteScroll from "api/hook/useInfiniteScroll";
import InfiniteScrollTrigger from "components/InfiniteScrollTrigger";
import PokemonCard from "components/PokemonCard";
import LoadingPokemonCardList from "components/LoadingPokemonCardList";
import { PokemonCardListContainer } from "./styles";

const PokemonCardList: React.FC = () => {
  const { setLoadCalls, pokemonList, loadingPokemonList, offset } =
    useInfiniteScroll();

  return (
    <PokemonCardListContainer>
      {loadingPokemonList ? (
        <LoadingPokemonCardList listLength={offset} />
      ) : (
        pokemonList?.map((item: any, index: number) => (
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
        ))
      )}

      <InfiniteScrollTrigger
        functionToTrigger={() => {
          setLoadCalls((previousState) => previousState + 1);
        }}
        loading={loadingPokemonList}
      />
    </PokemonCardListContainer>
  );
};

export default PokemonCardList;
