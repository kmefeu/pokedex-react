import styled from "styled-components";

interface animationProps {
  CardIndex: number;
}

const BaseHeight = 140;
const BorderRadius = 8;
const CardsHeightSpacing = 30;

export const ListContainer = styled.div`
  @keyframes pulse {
    0% {
      background-position: 0px 0px;
    }
    50% {
      transform: scale(1.025);
    }
    100% {
      background-position: 800px 0px;
    }
  }
`;

export const CardContainer = styled.div<animationProps>`
  box-sizing: border-box;
  height: ${BaseHeight + "px"};
  margin: ${CardsHeightSpacing + "px"} auto;
  border-radius: ${BorderRadius + "px"};
  animation: 2s linear infinite pulse;
  overflow: hidden;
  background-color: #dddddd;
  animation-delay: ${({ CardIndex }) => (CardIndex * 1) / 5}s;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;

  animation: 5s linear infinite pulse;
  background-image: linear-gradient(
    90deg,
    rgba(200, 200, 200, 1) 0%,
    rgba(200, 200, 200, 0.3) 30%,
    rgba(200, 200, 200, 0.15) 45%,
    rgba(200, 200, 200, 0.075) 50%,
    rgba(200, 200, 200, 0.015) 65%,
    rgba(200, 200, 200, 0.3) 70%,
    rgba(200, 200, 200, 1) 100%
  );
`;
export default CardContainer;
