import React, { useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { LargePoster, Title, DetailBox, SubTitle, Text } from './detail.styled';
import { useStore } from 'react-redux';
import { getMovieDetail } from '../../store/movies';
import { connect } from 'react-redux';
import { Loading } from '../../components';
import { handleMovieData } from '../../helpers/dataHandler';

export const DetailPage = ({ match, movie, loading }) => {
  const {
    params: { id },
  } = match;

  console.log(movie);
  const store = useStore();

  useEffect(() => {
    store.dispatch(getMovieDetail(id));
  }, [id, store]);

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
