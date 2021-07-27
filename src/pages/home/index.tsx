import React from "react";
import Pokedex from "../../components/Pokedex";
import getData from "api/graphiqlRequests";

import { MainContainer } from "./styles";

const Home: React.FC = () => {
  const testQuery = `{
    pokemon_v2_pokemon(limit: 1050, offset: 0) {
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

  getData(testQuery);
  return (
    <MainContainer>
      <Pokedex />
    </MainContainer>
  );
};

export default Home;
