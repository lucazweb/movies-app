import React from 'react';
import { MovieListWrapper, MoviePoster } from './movie-list.styled';
import { Row, Col } from 'react-flexbox-grid';
import { Loading } from '../Loading/loading.component';

export const MovieList = ({ height }) => {
  return (
    <MovieListWrapper height={height}>
      {false ? (
        <Row center="xs">
          <Col xs={12} md={2}>
            <MoviePoster />
          </Col>
          <Col xs={12} md={2}>
            <MoviePoster />
          </Col>
          <Col xs={12} md={2}>
            <MoviePoster />
          </Col>
          <Col xs={12} md={2}>
            <MoviePoster />
          </Col>
          <Col xs={12} md={2}>
            <MoviePoster />
          </Col>
        </Row>
      ) : (
        <Loading />
      )}
    </MovieListWrapper>
  );
};
