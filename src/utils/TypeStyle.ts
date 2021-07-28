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
    primaryColor: "#a8a878",
    secondaryColor: "#a79b6c",
    icon: Normal,
  },
  {
    name: "fire",
    primaryColor: "#f08030",
    secondaryColor: "#f84025",
    icon: Fire,
  },
  {
    name: "water",
    primaryColor: "#6890f0",
    secondaryColor: "#4b93ca",
    icon: Water,
  },
  {
    name: "electric",
    primaryColor: "#f8d030",
    secondaryColor: "#fca523",
    icon: Electric,
  },
  {
    name: "grass",
    primaryColor: "#78c850",
    secondaryColor: "#72b81d",
    icon: Grass,
  },
  {
    name: "ice",
    primaryColor: "#98d8d8",
    secondaryColor: "#95bbe6",
    icon: Ice,
  },
  {
    name: "fighting",
    primaryColor: "#c03028",
    secondaryColor: "#9b4104",
    icon: Fighting,
  },
  {
    name: "poison",
    primaryColor: "#a040a0",
    secondaryColor: "#6936a8",
    icon: Poison,
  },
  {
    name: "ground",
    primaryColor: "#e0c068",
    secondaryColor: "#eda861",
    icon: Ground,
  },
  {
    name: "flying",
    primaryColor: "#a890f0",
    secondaryColor: "#7779d9",
    icon: Flying,
  },
  {
    name: "psychic",
    primaryColor: "#f85888",
    secondaryColor: "#d33cb5",
    icon: Psychic,
  },
  {
    name: "bug",
    primaryColor: "#a8b820",
    secondaryColor: "#7fb881",
    icon: Bug,
  },
  {
    name: "rock",
    primaryColor: "#b8a038",
    secondaryColor: "#c48c31",
    icon: Rock,
  },
  {
    name: "ghost",
    primaryColor: "#705898",
    secondaryColor: "#5865a6",
    icon: Ghost,
  },
  {
    name: "dragon",
    primaryColor: "#7038f8",
    secondaryColor: "#6770e0",
    icon: Dragon,
  },
  {
    name: "dark",
    primaryColor: "#705848",
    secondaryColor: "#7d4f4a",
    icon: Dark,
  },
  {
    name: "steel",
    primaryColor: "#b8b8d0",
    secondaryColor: "#b8ccde",
    icon: Steel,
  },
  {
    name: "fairy",
    primaryColor: "#ff65d5",
    secondaryColor: "#bd59ff",
    icon: Fairy,
  },
];

export const TypeStyle = (type: any) => {
  if (!type) {
    return Types[0];
  }
  const typeStyle = Object.values(Types).find((element) => {
    return element.name === type;
  });
  return typeStyle;
};
