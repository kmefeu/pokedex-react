import React from "react";
import { CardContainer, Card } from "./styles";

interface LoadingPokemonCardProps {
  LoadingDelayBasis: number;
}

const LoadingPokemonCard: React.FC<LoadingPokemonCardProps> = ({
  LoadingDelayBasis,
}: LoadingPokemonCardProps) => {
  return (
    <CardContainer CardIndex={LoadingDelayBasis}>
      <Card />
    </CardContainer>
  );
};

export default LoadingPokemonCard;
