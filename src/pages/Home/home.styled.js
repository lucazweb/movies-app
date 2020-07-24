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
  width: 70%;
  input {
    outline: none;
    padding: 6px;
    width: 100%;
    font-size: 1.2em;
    height: 45px;
    border: 2px solid black;
    background: #ccc;
    border-radius: 3px;
  }
`;

export const MockComponentWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  opacity: ${({ height }) => (!!height ? 1 : 0)};
  transition: all ease 0.4s;
`;
