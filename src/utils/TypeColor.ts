export interface TypesProps {
  [index: number]: {
    name: string;
    primaryColor: string;
    secondaryColor: string;
  };
}

export const Types: TypesProps = [
  { name: "normal", primaryColor: "#A8A77A", secondaryColor: "#8a8969" },
  { name: "fire", primaryColor: "#EE8130", secondaryColor: "#fa9550" },
  { name: "water", primaryColor: "#6890F0", secondaryColor: "#739ef5" },
  { name: "electric", primaryColor: "#F8D030", secondaryColor: "#e0bd31" },
  { name: "grass", primaryColor: "#7AC74C", secondaryColor: "#63a163" },
  { name: "ice", primaryColor: "#98D8D8", secondaryColor: "#75c7c3" },
  { name: "fighting", primaryColor: "#C22E28", secondaryColor: "#9b4104" },
  { name: "poison", primaryColor: "#A33EA1", secondaryColor: "#a865a7" },
  { name: "ground", primaryColor: "#E2BF65", secondaryColor: "#a18b54" },
  { name: "flying", primaryColor: "#A98FF3", secondaryColor: "#bba6f5" },
  { name: "psychic", primaryColor: "#F85888", secondaryColor: "#d6517a" },
  { name: "bug", primaryColor: "#A8B820", secondaryColor: "#94a310" },
  { name: "rock", primaryColor: "#B6A136", secondaryColor: "#85762e" },
  { name: "ghost", primaryColor: "#735797", secondaryColor: "#7a6791" },
  { name: "dragon", primaryColor: "#6F35FC", secondaryColor: "#6d49c9" },
  { name: "dark", primaryColor: "#705746", secondaryColor: "#665e58" },
  { name: "steel", primaryColor: "#B7B7CE", secondaryColor: "#8e8ea3" },
  { name: "fairy", primaryColor: "#EE99AC", secondaryColor: "#e37f95" },
];

export const TypeColor = (type: string) => {
  const Color = Object.values(Types).map((element) => {
    if (element.name === type) {
      console.log(element.name);
      return element;
    }
    return null;
  });
  return Color;
};
