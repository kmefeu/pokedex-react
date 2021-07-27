import React from "react";
import { MainContainer } from "./styles";
import Pokedex from "components/Pokedex";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Pokedex />
    </MainContainer>
  );
};

export default Home;
