import React from "react";

interface CardProps {
  msg: string;
  img?: string;
}

const Card = (props: CardProps) => {
  const { msg, img } = props;
  return <div>{msg}</div>;
};

export default Card;
