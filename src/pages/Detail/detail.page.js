import React, { useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { LargePoster, Title, DetailBox, SubTitle, Text } from './detail.styled';
import { useStore } from 'react-redux';
import { getMovieDetail } from '../../store/movies';

export const DetailPage = ({ match, movie }) => {
  const {
    params: { id },
  } = match;

  const store = useStore();

  useEffect(() => {
    store.dispatch(getMovieDetail(id));
  });

  return (
    <Grid>
      <Row style={{ marginTop: 32 }}>
        <Col xs={12}>
          <Title>Sexy Killer </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <LargePoster image="https://m.media-amazon.com/images/M/MV5BNDI0MTI2MjktZTlkZi00ODIyLThjOTMtNjg3ZDA1MGE3NjdiXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg" />
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={12} md={6}>
              <DetailBox>
                <SubTitle>
                  <SubTitle>Director</SubTitle>
                  <Text>Jon Bokenkamp</Text>
                </SubTitle>
              </DetailBox>
            </Col>
            <Col xs={12} md={6}>
              <DetailBox>
                <SubTitle>
                  <SubTitle> Director</SubTitle>
                  <Text>Jon Bokenkamp</Text>
                </SubTitle>
              </DetailBox>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export const Detail = DetailPage;
