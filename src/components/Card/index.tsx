import React from "react";
import { CardContainer, ContainerText, CardTitle } from "./styles";

interface CardProps {
  msg: string;
  img?: string;
}

const Card = (props: CardProps) => {
  const { msg } = props;
  return (
    <CardContainer>
      <ContainerText>
        <span>
          <b>#1</b>
        </span>
        <CardTitle>Bullbasuar</CardTitle>
      </ContainerText>
      <div>
        <div>
          <img src="" alt="" />
          <span>Grass</span>
        </div>
        <div>
          <img src="" alt="" />
          <span>Poison</span>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
