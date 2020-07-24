import React from 'react';
import { MovieListWrapper } from './movie-list.styled';

export const MovieList = ({ height }) => {
  return (
    <MovieListWrapper height={height}>
      <pre> Movie list </pre>
    </MovieListWrapper>
  );
};
