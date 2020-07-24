import styled from 'styled-components';

export const MovieListWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  opacity: ${({ height }) => (!!height ? 1 : 0)};
  transition: all ease 0.4s;
  margin-top: 16px;
`;

export const MoviePoster = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://images-na.ssl-images-amazon.com/images/I/717opCddMML._SY550_.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
