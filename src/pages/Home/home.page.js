import React, { useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useFormik } from 'formik';
import { Wrapper, SearchBox, SearchField } from './home.styled';
import { MovieList, Form, Input } from '../../components';
import { getMovies, RESET_SEARCH } from '../../store/movies';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    onSubmit: (values) => {
      const { query } = values;

      dispatch(getMovies(query));
    },
  });

  const query = useSelector(({ movies: { query } }) => query);

  useEffect(() => {
    if (query) {
      formik.setFieldValue('query', query.query);
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

  return (
    <Grid fluid={true}>
      <Row center="xs">
        <Col xs={12}>
          <Wrapper>
            <SearchBox>
              <SearchField>
                <Form onSubmit={formik.handleSubmit}>
                  <Input
                    id="query"
                    name="query"
                    type="text"
                    autoComplete="off"
                    onChange={handleChange}
                    value={formik.values.query}
                    placeholder="Search a movie"
                  />
                  {!query && <button type="submit">Buscar</button>}
                  {query && <button onClick={handleReset}>limpar</button>}
                </Form>
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
