import React from "react";
import PokemonCard from "../../components/PokemonCard";
import Bullsasaur from "../../assets/images/bitmap/1.png";
import { MainContainer } from "./styles";
import { useDetectPokes } from "../../api/useRequest";

const Home: React.FC = () => {
  useDetectPokes();

  return (
    <MainContainer>
      <PokemonCard
        name="bulbasaur"
        number="1"
        types={["grass", "poison"]}
        sprites={Bullsasaur}
      />
      <PokemonCard
        name="bulbasaur"
        number="1"
        types={["grass", "poison"]}
        sprites={Bullsasaur}
      />
      <PokemonCard
        name="bulbasaur"
        number="1"
        types={["grass", "poison"]}
        sprites={Bullsasaur}
      />
    </MainContainer>
  );
};

export default Home;
