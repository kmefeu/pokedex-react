import {
  Dispatch,
  SetStateAction,
} from "hoist-non-react-statics/node_modules/@types/react";
import { createContext } from "react";

type PokedexProps = {
  isInputEmpty: boolean;
  customSearch: (event: any) => Promise<void>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  searchList: any;
  setSearchList: Dispatch<SetStateAction<string>>;
  loading: boolean;
};

const PokedexContext = createContext<PokedexProps>({
  isInputEmpty: true,
  customSearch: async (event: any) => {},
  inputValue: "",
  setInputValue: () => {},
  searchList: undefined,
  setSearchList: () => {},
  loading: false,
});

export default PokedexContext;
