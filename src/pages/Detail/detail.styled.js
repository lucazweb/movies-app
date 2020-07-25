import styled from 'styled-components';
import { H1, H2, MoviePoster } from '../../components';
import { Breakpoint } from '../../config/constants';
import { Row } from 'react-flexbox-grid';

export const LargePoster = styled(MoviePoster)`
  height: 80vh;
  cursor: default;
`;

export const Title = styled(H1)`
  color: white;
  font-size: 2.4em;
  font-weight: bold;
  text-shadow: 1px 2px 2px #333;
  margin: 0px auto 38px auto;
  @media (max-width: ${Breakpoint.sm}em) {
    font-size: 1.6em;
    line-height: 1em;
    padding-left: 12px;
    margin: 0px auto 18px auto;
  }
`;

export const SubTitle = styled(H2)`
  font-weight: bold;
  font-size: 0.95em;
  color: #ccc;
  margin-bottom: 4px;
  color: #ffb200;
`;

export const Text = styled.p`
  color: white;
  font-size: 0.8em;
  line-height: 1.6em;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;
  text-align: left;
`;

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin-bottom: 18px;
  outline: none;
  &:hover {
    background: #ffc107;
  }
`;

export const StyledRow = styled(Row)`
  margin-top: 32px;
  @media (max-width: ${Breakpoint.sm}em) {
    margin-top: 18px;
  }
`;
