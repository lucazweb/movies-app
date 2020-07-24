import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useFormik } from 'formik';
import { Wrapper, SearchBox, SearchField } from './home.styled';
import { MovieList, Form, Input } from '../../components';
import store from '../../store';
import { connect } from 'react-redux';
import { getMovies } from '../../store/movies';

const HomePage = ({ movies }) => {
  const [formQuery, setFormQuery] = useState(null);
  const formik = useFormik({
    initialValues: {
      query: '',
    },
    onSubmit: (values) => {
      const { query } = values;
      setFormQuery(query);
      // get movies action
      store.dispatch(getMovies(query));
    },
  });

  const handleChange = (e) => {
    // setFormQuery(e.target.value);
    formik.setFieldValue('query', e.target.value);
  };

  const handleReset = () => {
    setFormQuery(null);
    formik.setFieldValue('query', '');
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
                  {!formQuery && <button type="submit">Buscar</button>}
                  {formQuery && <button onClick={handleReset}>limpar</button>}
                </Form>
              </SearchField>
              <MovieList height={formQuery ? 500 : 0} />
            </SearchBox>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  );
};

const mapStateToProps = ({ movies }) => {
  console.log(movies);
  return {
    movies,
  };
};

export const Home = connect(mapStateToProps)(HomePage);
