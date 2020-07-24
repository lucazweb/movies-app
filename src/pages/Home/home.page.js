import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  Wrapper,
  SearchBox,
  SearchField,
  MockComponentWrapper,
} from './home.styled';

export const Home = () => {
  const [query, setQuery] = useState(null);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Grid fluid={true}>
      <Row center="xs">
        <Col xs={12}>
          <Wrapper>
            <SearchBox>
              <SearchField>
                <input
                  type="search"
                  onChange={handleQuery}
                  placeholder="Search a movie"
                />
              </SearchField>
              <MockComponentWrapper height={query ? 500 : 0} />
            </SearchBox>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  );
};
