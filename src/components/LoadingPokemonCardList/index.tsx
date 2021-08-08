import React, { useEffect, useState } from "react";

import { CardContainer, ListContainer, Card } from "./styles";

interface LoadingPokemonCardListProps {
  listLength: number;
}

const LoadingPokemonCardList = ({
  listLength,
}: LoadingPokemonCardListProps) => {
  const [loop, setLoop] = useState<number[]>([]);
  useEffect(() => {
    for (let i = 0; listLength > i; i++) {
      setLoop((previousState) => [...previousState, i]);
    }
  }, []);

  return (
    <ListContainer>
      {loop.map((number) => (
        <CardContainer CardIndex={number}>
          <Card />
        </CardContainer>
      ))}
    </ListContainer>
  );
};

export default LoadingPokemonCardList;
