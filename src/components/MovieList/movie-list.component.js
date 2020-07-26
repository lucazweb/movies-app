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
import {
  Placeholder404,
  PlaceholderError,
} from '../Placeholder/placeholder.component';
import { Span, Strong } from '../Typography/typograph.styled';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getMovies } from '../../store/movies';

const MovieListComponent = ({
  height,
  movies,
  loading,
  handleReset,
  error,
  page,
  query,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDetail = (id) => {
    history.push(`/movie-detail/${id}`);
  };

  const handlePagination = (query, page) => {
    console.log('load more..');
    const newPage = page + 1;
    dispatch(getMovies(query, newPage));
  };

  if (error) {
    return (
      <PlaceholderError
        action={handleReset}
        display={height !== 0 ? true : false}
      />
    );
  }

  return (
    <MovieListWrapper height={height}>
      {!loading ? (
        <Row center="xs">
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <Col key={index} xs={12} md={4}>
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
            ))
          ) : (
            <Placeholder404
              action={handleReset}
              display={height !== 0 ? true : false}
            />
          )}
          <Col xs={12}>
            <button onClick={() => handlePagination(query, page)}>
              Carregar mais
            </button>
          </Col>
        </Row>
      ) : (
        <Loading />
      )}
    </MovieListWrapper>
  );
};

const mapStateToProps = ({
  movies: { movies, query, error, page },
  ui: { loading },
}) => {
  console.log('PAGE: ', page);
  return {
    movies,
    query,
    error,
    page,
    loading,
  };
};

export const MovieList = connect(mapStateToProps)(MovieListComponent);
