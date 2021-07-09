import React from "react";
import { TagContainer, TypeImage, TypeName } from "./styles";

interface TypeTagProps {
  type: string;
}
const TypeTag = ({ type }: TypeTagProps) => {
  return (
    <TagContainer type={type}>
      <TypeImage type={type} />
      <TypeName>{type}</TypeName>
    </TagContainer>
  );
};

export default TypeTag;
