import styled from "styled-components";
import Default from "../../assets/images/svg/types/grass.svg";
import { TypeStyle } from "../../utils/TypeStyle";

interface TypeImageProps {
  type: string;
}

const TagSize = 16;
const TextSize = 14;
const BorderRadius = 8;
const BasePadding = 5;

export const TagContainer = styled.div<TypeImageProps>`
  display: flex;
  align-items: center;
  border-radius: ${BorderRadius + "px"};
  padding: ${BasePadding + "px"};
  margin: 0px 2.5px;

  ${({ type }) => {
    const color = TypeStyle(type);
    return `background: ${color.primaryColor}`;
  }}
`;

export const TypeImage = styled.div<TypeImageProps>`
  height: ${TagSize + "px"};
  width: ${TagSize + "px"};
  background-size: 100%;
  margin-right: 5px;
  background-image: url(${Default});

  ${({ type }) => {
    const color = TypeStyle(type);
    return `background: ${color.icon}`;
  }}
`;

export const TypeName = styled.span`
  text-transform: capitalize;
  font-weight: medium;
  font-size: ${TextSize + "px"};
  color: #ffffff;
`;
