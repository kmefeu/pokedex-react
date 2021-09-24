import { render } from "@testing-library/react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import PokemonCard from "./index";

// descreve um grupo de testes
describe("PokemonCard Component", () => {
  // teste para ver se o componente esta renderizando da forma correta
  test("PokemonCard renders correctly", () => {
    // cria um history mockado para conseguir renderizar o componente que tem essa dependencia
    const history = createMemoryHistory();
    // render faz o render virtual do componente
    const { debug, getByText } = render(
      <Router history={history}>
        <PokemonCard
          loading={false}
          LoadingIndex={1}
          key="1"
          name="Bulbasaur"
          id="1"
          types={[
            { pokemon_v2_type: { name: "grass" } },
            { pokemon_v2_type: { name: "poison" } },
          ]}
          sprites={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
          }
        />
      </Router>
    );

    // imprime no console a saida do componente que esta dentro do debug
    debug();

    expect(getByText("Bulbasaur")).toBeInTheDocument();

    // testar o loading
  });
});
