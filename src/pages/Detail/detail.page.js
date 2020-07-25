import React, { useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  LargePoster,
  Title,
  DetailBox,
  SubTitle,
  Text,
  Button,
} from './detail.styled';
import { connect, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Loading } from '../../components';
import { getMovieDetail } from '../../store/movies';
import { handleMovieData } from '../../helpers/dataHandler';
import { FaArrowLeft } from 'react-icons/fa';

export const DetailPage = ({ match, movie, loading }) => {
  const {
    params: { id },
  } = match;

  console.log(movie);
  const history = useHistory();
  const store = useStore();

  useEffect(() => {
    store.dispatch(getMovieDetail(id));
  }, [id, store]);

  const handleGoBack = () => {
    history.push('/');
  };

  if (loading) {
    return <Loading />;
  }

  if (movie) {
    console.log(handleMovieData(movie, ['Title', 'Ratings']));
  }

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
          <Row style={{ marginTop: 32 }}>
            <Col xs={12}>
              <Button onClick={handleGoBack}>
                <FaArrowLeft />
              </Button>
              <Title> {movie.Title} </Title>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={5}>
              <LargePoster image={movie.Poster} />
            </Col>
            <Col xs={6}>
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

const mapStateToProps = ({ movies: { selected: movie }, ui: { loading } }) => {
  console.log(movie);
  return {
    movie,
    loading,
  };
};

export const Detail = connect(mapStateToProps)(DetailPage);
