import React from "react";
import Pokedex from "../../components/Pokedex";

import { MainContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Pokedex />
    </MainContainer>
  );
};

export default Home;
