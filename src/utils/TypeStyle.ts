import Normal from "../assets/images/svg/types/normal.svg";
import Fire from "../assets/images/svg/types/fire.svg";
import Water from "../assets/images/svg/types/water.svg";
import Electric from "../assets/images/svg/types/electric.svg";
import Grass from "../assets/images/svg/types/grass.svg";
import Ice from "../assets/images/svg/types/ice.svg";
import Fighting from "../assets/images/svg/types/fighting.svg";
import Poison from "../assets/images/svg/types/poison.svg";
import Ground from "../assets/images/svg/types/ground.svg";
import Flying from "../assets/images/svg/types/flying.svg";
import Psychic from "../assets/images/svg/types/psychic.svg";
import Bug from "../assets/images/svg/types/bug.svg";
import Rock from "../assets/images/svg/types/rock.svg";
import Ghost from "../assets/images/svg/types/ghost.svg";
import Dragon from "../assets/images/svg/types/dragon.svg";
import Dark from "../assets/images/svg/types/dark.svg";
import Steel from "../assets/images/svg/types/steel.svg";
import Fairy from "../assets/images/svg/types/fairy.svg";

export interface TypesProps {
  [index: number]: {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    icon: string;
  };
}

export const Types: TypesProps = [
  {
    name: "normal",
    primaryColor: "#A8A77A",
    secondaryColor: "#8a8969",
    icon: Normal,
  },
  {
    name: "fire",
    primaryColor: "#EE8130",
    secondaryColor: "#fa9550",
    icon: Fire,
  },
  {
    name: "water",
    primaryColor: "#6890F0",
    secondaryColor: "#739ef5",
    icon: Water,
  },
  {
    name: "electric",
    primaryColor: "#F8D030",
    secondaryColor: "#e0bd31",
    icon: Electric,
  },
  {
    name: "grass",
    primaryColor: "#7AC74C",
    secondaryColor: "#63a163",
    icon: Grass,
  },
  {
    name: "ice",
    primaryColor: "#98D8D8",
    secondaryColor: "#75c7c3",
    icon: Ice,
  },
  {
    name: "fighting",
    primaryColor: "#C22E28",
    secondaryColor: "#9b4104",
    icon: Fighting,
  },
  {
    name: "poison",
    primaryColor: "#A33EA1",
    secondaryColor: "#a865a7",
    icon: Poison,
  },
  {
    name: "ground",
    primaryColor: "#E2BF65",
    secondaryColor: "#a18b54",
    icon: Ground,
  },
  {
    name: "flying",
    primaryColor: "#A98FF3",
    secondaryColor: "#bba6f5",
    icon: Flying,
  },
  {
    name: "psychic",
    primaryColor: "#F85888",
    secondaryColor: "#d6517a",
    icon: Psychic,
  },
  {
    name: "bug",
    primaryColor: "#A8B820",
    secondaryColor: "#94a310",
    icon: Bug,
  },
  {
    name: "rock",
    primaryColor: "#B6A136",
    secondaryColor: "#85762e",
    icon: Rock,
  },
  {
    name: "ghost",
    primaryColor: "#735797",
    secondaryColor: "#7a6791",
    icon: Ghost,
  },
  {
    name: "dragon",
    primaryColor: "#6F35FC",
    secondaryColor: "#6d49c9",
    icon: Dragon,
  },
  {
    name: "dark",
    primaryColor: "#705746",
    secondaryColor: "#665e58",
    icon: Dark,
  },
  {
    name: "steel",
    primaryColor: "#B7B7CE",
    secondaryColor: "#8e8ea3",
    icon: Steel,
  },
  {
    name: "fairy",
    primaryColor: "#EE99AC",
    secondaryColor: "#e37f95",
    icon: Fairy,
  },
];

export const TypeStyle = (type: string) => {
  const typeStyle = Object.values(Types).find((element) => {
    return element.name === type;
  });
  return typeStyle;
};
