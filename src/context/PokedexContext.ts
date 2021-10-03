import { createContext } from "react";

type PokedexProps = {
  idList: [number] | undefined;
  isInputEmpty: boolean;
};

const PokedexContext = createContext<PokedexProps>({
  idList: undefined,
  isInputEmpty: true,
});

export default PokedexContext;
