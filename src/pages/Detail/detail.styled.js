import styled from 'styled-components';
import { H1, H2, MoviePoster } from '../../components';
import { Col } from 'react-flexbox-grid';

export const LargePoster = styled(MoviePoster)`
  height: 80vh;
`;

export const Title = styled(H1)`
  color: white;
  font-size: 2.4em;
  font-weight: bold;
  text-shadow: 1px 2px 2px #333;
  margin: 0px auto 38px auto;
`;

export const SubTitle = styled(H2)`
  font-weight: bold;
  font-size: 0.95em;
  color: #ccc;
  margin-bottom: 10px;
`;

// export const StyledCol = styled(Col)`
//   display: flex;
// `;

export const Text = styled.p`
  color: white;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
