import React, { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard";
import Bullsasaur from "../../assets/images/bitmap/1.png";
import { MainContainer } from "./styles";
import { useDetectPokes } from "../../api/useRequest";

const Home: React.FC = () => {
  const { detectedPokes, caughtPokes }: any = useDetectPokes();

  return (
    <MainContainer>
      {/* {caughtPokes.map((item: any) => {
        return (
          <PokemonCard
            name={item.name}
            number={item.id}
            types={(item.types[0], item.types[1])}
            sprites={Bullsasaur}
          />
        );
      })} */}
    </MainContainer>
  );
};

export default Home;
