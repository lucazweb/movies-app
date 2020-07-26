import styled from 'styled-components';
import { Breakpoint } from '../../config/constants';

export const StyledForm = styled.form``;

export const StyledInput = styled.input`
  box-sizing: border-box;
  outline: none;
  padding: 6px;
  width: 100%;
  font-size: 1.4em;
  height: 62px;
  border: 2px solid black;
  background: black;
  border-radius: 3px;
  padding: 10px 14px;
  color: white;
  letter-spacing: 1px;
  @media (max-width: ${Breakpoint.sm}em) {
    font-size: 1em;
    height: 55px;
  }
`;
