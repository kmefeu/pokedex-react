import React from "react";
import StatusBar from "components/StatusBar";

interface StatusListProps {
  data: any;
  type: string;
}
const StatusList: React.FC<StatusListProps> = ({
  data,
  type,
}: StatusListProps) => {
  return data.map((obj: any) => {
    return (
      <StatusBar
        name={obj.pokemon_v2_stat.name}
        pokemonPoints={obj.base_stat}
        maxPoints={255}
        type={type}
      />
    );
  });
};

export default StatusList;
