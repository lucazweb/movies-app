import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useFormik } from 'formik';
import {
  Wrapper,
  SearchBox,
  SearchField,
  MockComponentWrapper,
} from './home.styled';

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
                    onChange={formik.handleChange}
                    value={formik.values.query}
                    placeholder="Search a movie"
                  />
                </form>
              </SearchField>
              <MockComponentWrapper height={formQuery ? 500 : 0} />
            </SearchBox>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  );
};
