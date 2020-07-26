import styled from 'styled-components';
import { H2, Span } from '../Typography/typograph.styled';
import { Breakpoint } from '../../config/constants';
import placeholderImg from '../../assets/monitor_404.svg';
import placeholderError from '../../assets/error_placeholder.svg';

export const StyledImg = styled.div`
  width: 300px;
  height: 350px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-image: url(${placeholderImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: auto;
  @media (max-width: ${Breakpoint.sm}em) {
    width: 250px;
    height: 250px;
  }
`;

export const StyledErrorImg = styled(StyledImg)`
  background-image: url(${placeholderError});
`;

export const Text = styled(H2)`
  color: #dedede;
  font-size: 2em;
  margin-bottom: 18px;
  @media (max-width: ${Breakpoint.sm}em) {
    width: width 100%;
    font-size: 1.2em;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const SmallText = styled(Span)`
  color: #dedede;
  font-size: 1.5em;
  margin-bottom: 12px;
  @media (max-width: ${Breakpoint.sm}em) {
    font-size: 1em;
  }
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
