import React from "react";
import { Container, BarContainer, Bar, Title, Number } from "./styles";

interface StatusBarProps {
  name: string;
  pokemonPoints: number;
  maxPoints: number;
  type: string;
}

function StatusBar({ name, pokemonPoints, maxPoints, type }: StatusBarProps) {
  return (
    <Container>
      <Title>
        {name
          .replace("-", "-")
          .replace("attack", "atk")
          .replace("defense", "def")
          .replace("special-atk", "sat")
          .replace("special-def", "sde")
          .replace("speed", "spd")}
      </Title>
      <BarContainer>
        <Bar pokemonPoints={pokemonPoints} maxPoints={maxPoints} type={type}>
          <Number>{pokemonPoints}</Number>
        </Bar>
      </BarContainer>
    </Container>
  );
}

export default StatusBar;
