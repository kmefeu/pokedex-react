import React from "react";
import PokemonCard from "./components/PokemonCard";
import Bullsasaur from "../src/assets/images/bitmap/1.png";

function App() {
  return (
    <div>
      <PokemonCard
        name="bulbasaur"
        number="1"
        types={["grass", "poison"]}
        sprites={Bullsasaur}
      />
    </div>
  );
}

export default App;
