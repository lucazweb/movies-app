import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  LargePoster,
  Title,
  DetailBox,
  StyledRow,
  SubTitle,
  Text,
  BackButton,
} from './detail.styled';
import { Loading, Placeholder404 } from '../../components';
import { getMovieDetail, RESET_SEARCH } from '../../store/movies';
import { handleMovieData } from '../../helpers/dataHandler';
import { FaArrowLeft } from 'react-icons/fa';

export const DetailPage = ({ match, movie, loading, error }) => {
  const {
    params: { id },
  } = match;

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, [id, dispatch]);

  const handleGoBack = () => {
    history.push('/');
    setTimeout(() => window.scrollTo(0, 0), 300);
  };

  const handleRedirect = () => {
    // should reset application state
    dispatch({
      type: RESET_SEARCH,
    });

    history.push('/');
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Placeholder404 display={true} action={() => handleRedirect()} />;
  }

  // Map visible data to detail info
  const allowed = [
    'Actors',
    'Awards',
    'Country',
    'Director',
    'Genre',
    'Writer',
    'Metascore',
    'Language',
    'Plot',
    'Released',
    'Rated',
    'Year',
    'imdbRating',
    'imdbVotes',
    'imdbiDType',
  ];

  return (
    <>
      {movie && (
        <Grid>
          <StyledRow xs="center">
            <Col xs={11} md={12}>
              <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
              </BackButton>
              <Title> {movie.Title} </Title>
            </Col>
          </StyledRow>

          <Row center="xs">
            <Col xs={11} md={5}>
              <LargePoster image={movie.Poster} />
            </Col>
            <Col xs={11} md={6}>
              <Row>
                {handleMovieData(movie, allowed).map((info, index) => (
                  <Col key={index} xs={12} md={6}>
                    <DetailBox>
                      <SubTitle>{info.key}</SubTitle>
                      <Text>{info.value}</Text>
                    </DetailBox>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Grid>
      )}
    </>
  );
};

const mapStateToProps = ({
  movies: { selected: movie, error },
  ui: { loading },
}) => {
  return {
    movie,
    loading,
    error,
  };
};

export const Detail = connect(mapStateToProps)(DetailPage);
