import styled from "styled-components";

interface TriggerProps {
  loading: boolean;
}

export const Trigger = styled.div<TriggerProps>`
  ${(loading) => {
    return !loading ? ` width: 100%; height: 5px;` : `width: 0px; height: 0px;`;
  }}
`;
