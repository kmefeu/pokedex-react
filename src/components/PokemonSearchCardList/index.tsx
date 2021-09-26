import useSearch from "api/hook/useSearch";
import InfiniteScrollTrigger from "components/InfiniteScrollTrigger";
import PokemonCard from "components/PokemonCard";
import { PokemonCardListContainer } from "./styles";

const PokemonSearchCardListList: React.FC = () => {
  const { searchList, loading } = useSearch();

  console.log(searchList);
  return (
    <PokemonCardListContainer>
      {searchList?.map((item: any, index: number) => (
        <PokemonCard
          loading={loading}
          LoadingIndex={index}
          key={index}
          name={item.name}
          id={item.id}
          types={item.pokemon_v2_pokemontypes}
          sprites={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" +
            item.id +
            ".gif"
          }
        />
      ))}

      <InfiniteScrollTrigger functionToTrigger={() => {}} loading={loading} />
    </PokemonCardListContainer>
  );
};

export default PokemonSearchCardListList;
