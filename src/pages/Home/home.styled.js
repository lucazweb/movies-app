import styled from 'styled-components';

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

  button {
    outline: none;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 8px;
    width: 110px;
    height: 45px;
    font-size: 1em;
    color: #333;
    background: #dedede;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    &:hover {
      background: #4caf50;
      color: white;
    }
  }
`;

export const MockComponentWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  opacity: ${({ height }) => (!!height ? 1 : 0)};
  transition: all ease 0.4s;
`;
