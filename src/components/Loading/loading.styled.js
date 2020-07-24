import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`;

export const StyledLoading = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6em;
  color: white;
  margin-top: 32px;
  svg {
    animation: ${Spin} 2s ease-in-out 0s infinite;
  }
`;
