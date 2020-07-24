import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useFormik } from 'formik';
import { Wrapper, SearchBox, SearchField } from './home.styled';

import { MovieList } from '../../components';

export const Home = () => {
  const [formQuery, setFormQuery] = useState(null);

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    onSubmit: (values) => {
      const { query } = values;
      setFormQuery(query);
    },
  });

  const handleChange = (e) => {
    setFormQuery(e.target.value);
    formik.setFieldValue('query', e.target.value);
  };

  return (
    <Grid fluid={true}>
      <Row center="xs">
        <Col xs={12}>
          <Wrapper>
            <SearchBox>
              <SearchField>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    id="query"
                    name="query"
                    type="search"
                    autoComplete="off"
                    onChange={handleChange}
                    value={formik.values.query}
                    placeholder="Search a movie"
                  />
                </form>
              </SearchField>
              <MovieList height={formQuery ? 500 : 0} />
            </SearchBox>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  );
};
