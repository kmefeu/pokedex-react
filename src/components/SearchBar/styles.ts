import styled from "styled-components";
import PokeBall from "../../assets/images/svg/pokeball.svg";

export const SearchBarContainer = styled.div`
  display: flex;
  width: 40%;
  box-sizing: border-box;
  height: 60px;
  position: fixed;
  top: 0px;
  left: auto;
  right: auto;
  z-index: 2;
  background-color: red;
  border-radius: 0px 0px 24px 24px;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.15);
`;

export const LoadingContainer = styled.div`
  width: 60px;
  height: 100%;
  background-color: var(--midGray);
  border-radius: 0px 0px 0px 24px;
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
  color: var(midGray);

  input::-webkit-input-placeholder {
    color: var(--midGray);
    transition: color 1s;
  }

  transition: background-color 1s ease-in-out;
  font-size: 16px;
  padding-left: 30px;

  :hover {
    background-color: var(--midGray);

    ::-webkit-input-placeholder {
      color: #fff;
    }
  }
`;
