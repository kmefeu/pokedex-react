import { createContext } from "react";

type PokedexNavigationProps = {
  idList: [number] | undefined;
};

const PokedexNavigationContext = createContext<PokedexNavigationProps>({
  idList: undefined,
});

export default PokedexNavigationContext;
