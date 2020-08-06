import React, { useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useFormik } from 'formik';
import {
  Wrapper,
  SearchBox,
  SearchField,
  ButtonSearch,
  ButtonDanger,
} from './home.styled';
import { Logo, MovieList, Form, Input } from '../../components';
import { getMovies, RESET_SEARCH } from '../../store/movies';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';

const HomePage = () => {
  const dispatch = useDispatch();
  const { query, searching, movies } = useSelector(
    ({ movies: { query, searching, movies = [] } }) => ({
      query,
      searching,
      movies,
    })
  );

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    onSubmit: (values) => {
      const { query } = values;

      if (query) {
        dispatch(getMovies(query));
      }
    },
  });

  useEffect(() => {
    if (query) {
      formik.setFieldValue('query', query);
    }
  }, [query]);

  const handleChange = (e) => {
    formik.setFieldValue('query', e.target.value);
  };

  const handleReset = () => {
    formik.setFieldValue('query', '');
    dispatch({
      type: RESET_SEARCH,
    });
  };

  const searching404 = movies.length === 0 && searching;

  return (
    <Grid fluid={true}>
      <Row center="xs">
        <Col xs={12}>
          <Wrapper>
            <SearchBox>
              <Logo />
              <SearchField>
                <Form onSubmit={formik.handleSubmit}>
                  <Input
                    className={searching404 ? 'error' : ''}
                    id="query"
                    data-testid="search-ipt"
                    name="query"
                    type="text"
                    autoComplete="off"
                    disabled={searching ? 'disabled' : ''}
                    onChange={handleChange}
                    value={formik.values.query}
                    placeholder="Procure seu Filme"
                  />
                  {!query && (
                    <ButtonSearch data-testid="search-button" type="submit">
                      Buscar
                    </ButtonSearch>
                  )}
                </Form>
                {query && (
                  <ButtonDanger
                    data-testid="reset-button"
                    onClick={handleReset}
                  >
                    <span>Limpar</span>
                    <GrFormClose />
                  </ButtonDanger>
                )}
              </SearchField>
              <MovieList
                handleReset={() => handleReset()}
                height={query ? 500 : 0}
              />
            </SearchBox>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  );
};

export const Home = HomePage;
