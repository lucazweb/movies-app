import styled from 'styled-components';
import { H2, Span } from '../Typography/typograph.styled';
import placeholderImg from '../../assets/monitor_404.svg';

export const StyledImg = styled.div`
  width: 300px;
  height: 350px;
  display: ${({ display }) => (display ? 'block' : 'none')};
  background-image: url(${placeholderImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: auto;
`;

export const Text = styled(H2)`
  color: #dedede;
  font-size: 2em;
  margin-bottom: 18px;
`;

export const SmallText = styled(Span)`
  color: #dedede;
  font-size: 1.5em;
  margin-bottom: 12px;
`;

export const InfoButton = styled.button`
  box-sizing: border-box;
  bottom: 16px;
  border: none;
  background: #dedede;
  color: #333;
  border-radius: 3px;
  width: 200px;
  height: 40px;
  padding: 8px 10px;
  font-size: 1em;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all ease 0.3s;
  margin-top: 18px;
  &:hover {
    background: #4caf50;
    color: white;
  }
`;
