import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonContainer, IconContainer } from "./styles";

interface NavigationButtonProps {
  goTo: string;
  iconSrc: string;
  alt?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  goTo,
  iconSrc,
  alt = "",
}: NavigationButtonProps) => {
  const history = useHistory();
  return (
    <ButtonContainer onClick={() => history.push(goTo)}>
      <IconContainer src={iconSrc} alt={alt} />
    </ButtonContainer>
  );
};

export default NavigationButton;
