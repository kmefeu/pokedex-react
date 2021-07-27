import styled from "styled-components";

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
  display: flex;
  align-content: center;
  justify-content: center;
  width: 60px;
  height: 100%;
  transition: background-color 1s ease-in-out;
  border-radius: 0px 0px 0px 24px;

  ${({ inputLength }) =>
    inputLength > 0
      ? `border-radius: 0px 0px 0px 24px;`
      : `border-radius: 0px 0px 24px 24px;`}

  ${({ isFocus }) =>
    isFocus
      ? `background-color:var(--red);`
      : `background-color: var(--midGray);`}
`;

export const LoadingImage = styled.img`
  width: 35px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 24px 0px;
  color: var(--midGray);
  transition: 1s ease-in-out;
  font-size: 18px;
  padding-left: 10px;
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
