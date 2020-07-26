import React from 'react';
import {
  StyledImg,
  StyledErrorImg,
  Text,
  SmallText,
} from './placeholder.styled';
import { ActionButton } from '../Common/common.component';
import { Row, Col } from 'react-flexbox-grid';

export const Placeholder404 = ({ display, buttonText, action }) => {
  const handleAction = () => {
    if (action) {
      action();
    }
  };

  return (
    <Row center="xs">
      <Col xs={12}>
        <StyledImg visible={display} />
      </Col>
      <Col xs={12}>
        <Text>Oups.. não encontramos o seu filme</Text>
      </Col>
      <Col xs={12}>
        <SmallText>Que tal realizar uma nova busca?</SmallText>
      </Col>
      {action && (
        <Col xs={12}>
          <ActionButton onClick={handleAction}>
            {buttonText || 'Tentar novamente'}
          </ActionButton>
        </Col>
      )}
    </Row>
  );
};

export const PlaceholderError = ({ display, buttonText, action }) => {
  const handleAction = () => {
    if (action) {
      action();
    }
  };

  return (
    <Row center="xs">
      <Col xs={12}>
        <StyledErrorImg visible={display} />
      </Col>
      <Col xs={12}>
        <Text>Oups.. algo deu errado</Text>
      </Col>
      <Col xs={12}>
        <SmallText>Que tal realizar uma nova busca?</SmallText>
      </Col>
      {action && (
        <Col xs={12}>
          <ActionButton onClick={handleAction}>
            {buttonText || 'Tentar novamente'}
          </ActionButton>
        </Col>
      )}
    </Row>
  );
};
