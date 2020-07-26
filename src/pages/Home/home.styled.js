import styled from 'styled-components';
import { Breakpoint, Color } from '../../config/constants';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SearchBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  margin: auto;
  min-height: 510px;
  transition: all ease 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px;
`;

export const SearchField = styled.div`
  position: relative;
  width: 70%;
  @media (max-width: ${Breakpoint.sm}em) {
    width: 100%;
  }
`;

export const ButtonSearch = styled.button`
  outline: none;
  position: absolute;
  right: 10px;
  top: 8px;
  cursor: pointer;
  height: 45px;
  font-size: 1em;
  padding: 6px 12px;
  color: #333;
  background: #dedede;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;

  svg {
    display: none;
  }

  &:hover {
    background: #4caf50;
    color: white;
  }

  @media (max-width: ${Breakpoint.sm}em) {
    height: 40px;
    svg {
      display: block;
      font-size: 1.1em;
    }
    span {
      display: none;
    }
  }
`;

export const ButtonDanger = styled(ButtonSearch)`
  &:hover {
    background: ${Color.danger};
  }
`;

export const MockComponentWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  opacity: ${({ height }) => (!!height ? 1 : 0)};
  transition: all ease 0.4s;
`;
