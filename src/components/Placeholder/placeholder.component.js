import React from 'react';
import { StyledImg, Text, SmallText, InfoButton } from './placeholder.styled';
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
        <StyledImg display={display} />
      </Col>
      <Col xs={12}>
        <Text>Oups.. Não encontramos o seu filme</Text>
      </Col>
      <Col xs={12}>
        <SmallText>Que tal realizar uma nova busca?</SmallText>
      </Col>
      {action && (
        <Col xs={12}>
          <InfoButton onClick={handleAction}>
            {buttonText || 'Tentar novamente'}
          </InfoButton>
        </Col>
      )}
    </Row>
  );
};
