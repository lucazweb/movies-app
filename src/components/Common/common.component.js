import styled from 'styled-components';
import { Breakpoint, Color } from '../../config/constants';

export const InfoButton = styled.button`
  box-sizing: border-box;
  bottom: 16px;
  border: none;
  background: yellow;
  color: #333;
  border-radius: 3px;
  width: 200px;
  padding: 8px 10px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background: #ffc107;
  }

  @media (max-width: ${Breakpoint.sm}em) {
    margin-top: 42px;
  }
`;

export const LoadButton = styled(InfoButton)`
  text-transform: uppercase;
  background: ${Color.darkGray};
  color: white;
  font-weight: normal;
  letter-spacing: 0.08em;
  &:hover {
    background: ${Color.primaryGreen};
    transform: scale(1.1);
  }
`;

export const ActionButton = styled(LoadButton)`
  margin-top: 18px;
`;
