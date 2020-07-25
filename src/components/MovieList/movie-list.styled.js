import styled, { keyframes } from 'styled-components';
import placeholder from '../../assets/poster_placeholder.png';

const showUp = keyframes`
    from {opacity:0;}
    to {opacity: 1}
`;

export const MovieListWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  opacity: ${({ height }) => (!!height ? 1 : 0)};
  transition: all ease 0.4s;
  margin: 16px auto;
`;

export const MoviePoster = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 360px;
  background-color: black;
  background-image: url(${({ image }) =>
    image !== 'N/A' ? image : placeholder});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 15px;
  border-radius: 3px;
  transition: opacity ease 0.4s;
  &:hover {
    opacity: 0.8;
    div {
      display: flex;
    }
  }
`;

const MovieGradient = `
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.013042717086834688) 0%,
    rgba(5, 5, 5, 0.8925945378151261) 60%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.013042717086834688) 0%,
    rgba(5, 5, 5, 0.8925945378151261) 60%
  );
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.013042717086834688) 0%,
    rgba(5, 5, 5, 0.8925945378151261) 60%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#050505",GradientType=1);
`;

export const MovieInfo = styled.div`
  box-sizing: border-box;
  padding: 12px;
  animation-name: ${showUp};
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  position: absolute;
  display: none;
  flex-direction: column;
  width: 300px;
  height: 360px;
  ${MovieGradient};
  z-index: 900;
  color: white;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  margin-bottom: 6px;
`;

export const MovieTitle = styled.h2`
  font-weight: bold;
  color: white;
  font-size: 1.1em;
  line-height: 1em;
`;

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
`;
