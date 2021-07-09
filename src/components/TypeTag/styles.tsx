import styled from "styled-components";
import Default from "../../assets/images/svg/types/grass.svg";
import Grass from "../../assets/images/svg/types/grass.svg";
import Poison from "../../assets/images/svg/types/poison.svg";

interface TypeImageProps {
  type: string;
}

export const TagContainer = styled.div<TypeImageProps>`
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin: 0px 2.5px;

  ${({ type }) => {
    if (type === "grass") {
      return `background: #55B252;`;
    }
    if (type === "poison") {
      return `background: #9D43C2;`;
    }
  }};
`;

export const TypeImage = styled.div<TypeImageProps>`
  height: 38px;
  width: 38px;
  background-size: 100%;
  margin-right: 5px;
  background-image: url(${Default});

  ${({ type }) => {
    if (type === "grass") {
      return `background-image: url(${Grass});`;
    }
    if (type === "poison") {
      return `background-image: url(${Poison});`;
    }
  }}
`;

export const TypeName = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 28px;
  color: #ffffff;
`;
