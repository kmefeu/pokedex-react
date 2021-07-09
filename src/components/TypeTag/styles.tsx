import styled from "styled-components";
import Default from "../../assets/images/svg/types/grass.svg";
import { TypeStyle } from "../../utils/TypeStyle";

interface TypeImageProps {
  type: string;
}

export const TagContainer = styled.div<TypeImageProps>`
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin: 0px 2.5px;

  ${({ type }) => {
    const color = TypeStyle(type);
    return `background: ${color.primaryColor}`;
  }}
`;

export const TypeImage = styled.div<TypeImageProps>`
  height: 38px;
  width: 38px;
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
  font-weight: bold;
  font-size: 28px;
  color: #ffffff;
`;
