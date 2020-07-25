import React from 'react';
import {
  MovieListWrapper,
  MoviePoster,
  MovieInfo,
  List,
  ListItem,
  MovieTitle,
  InfoButton,
} from './movie-list.styled';
import { Row, Col } from 'react-flexbox-grid';
import { Loading } from '../Loading/loading.component';
import { Span, Strong } from '../Typography/typograph.styled';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const MovieListComponent = ({ height, movies, loading }) => {
  const history = useHistory();

  const handleDetail = (id) => {
    history.push(`/movie-detail/${id}`);
  };

  return (
    <MovieListWrapper height={height}>
      {!loading ? (
        <Row center="xs">
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <Col key={index} xs={12} md={3}>
                <MoviePoster image={movie.Poster}>
                  <MovieInfo>
                    <List>
                      <ListItem>
                        <MovieTitle>{movie.Title}</MovieTitle>
                      </ListItem>
                      <ListItem>
                        <Strong>Gênero</Strong> <Span>{movie.Type}</Span>
                      </ListItem>
                      <ListItem>
                        <Strong>Ano</Strong> <Span>{movie.Year}</Span>
                      </ListItem>
                      <ListItem>
                        <InfoButton onClick={() => handleDetail(movie.imdbID)}>
                          + Info
                        </InfoButton>
                      </ListItem>
                    </List>
                  </MovieInfo>
                </MoviePoster>
              </Col>
            ))}
        </Row>
      ) : (
        <Loading />
      )}
    </MovieListWrapper>
  );
};

const mapStateToProps = ({ movies: { movies }, ui: { loading } }) => {
  console.log('from component:', movies, loading);

  return {
    movies,
    loading,
  };
};

export const MovieList = connect(mapStateToProps)(MovieListComponent);
