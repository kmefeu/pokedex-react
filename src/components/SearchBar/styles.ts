import { useEffect } from "react";
import styled from "styled-components";
import PokeBall from "../../assets/images/svg/pokeball.svg";

interface LoadingContainerProps {
  isFocus: boolean;
  inputLength: number;
}

export const SearchBarContainer = styled.div`
  display: flex;
  width: 25%;
  box-sizing: border-box;
  height: 60px;
  position: fixed;
  top: 0px;
  left: auto;
  right: auto;
  z-index: 2;
  border-radius: 0px 0px 24px 24px;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.15);
  background-color: var(--white);
  transition: background-color 1s ease-in-out;

  :hover {
    background-color: var(--midGray);
  }
`;

export const LoadingContainer = styled.div<LoadingContainerProps>`
  width: 60px;
  height: 100%;
  transition: background-color 1s ease-in-out;
  border-radius: 0px 0px 0px 24px;

  ${({ isFocus }) =>
    isFocus ? `background:#d80a0a` : `background: var(--midGray);`}

  ${({ inputLength }) =>
    inputLength > 0
      ? `border-radius: 0px 0px 0px 24px`
      : `border-radius: 0px 0px 24px 24px`}
`;

export const LoadingImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: 55%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${PokeBall});
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 24px 0px;
  color: var(--midGray);
  transition: 1s ease-in-out;
  font-size: 16px;
  padding-left: 30px;
  background-color: transparent;

  input::-webkit-input-placeholder {
    color: var(--midGray);
    transition: color 1s;
  }

  :hover {
    color: var(--white);
    ::-webkit-input-placeholder {
      color: #fff;
    }
  }
`;
