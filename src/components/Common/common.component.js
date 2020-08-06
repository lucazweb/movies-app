import React from 'react';
import styled from 'styled-components';
import { Breakpoint, Color } from '../../config/constants';
import { RiMovie2Line } from 'react-icons/ri';

export const LogoWrapper = styled.div.attrs({
  'data-testid': 'logo',
})`
  display: flex;
  width: 70%;
  justify-content: flex-start;
  font-size: 2.2em;
  color: white;
  margin-bottom: 32px;
  @media (max-width: ${Breakpoint.sm}em) {
    width: 100%;
    font-size: 1.4em;
    margin-top: 18px;
    margin-bottom: 18px;
  }
  svg {
    margin-right: 12px;
  }
`;

export const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <RiMovie2Line />
        <h1 style={{ color: 'white' }}>Movies Hub</h1>
      </LogoWrapper>
    </>
  );
};

export const InfoButton = styled.button`
  box-sizing: border-box;
  bottom: 16px;
  border: none;
  background: ${Color.highlight};
  color: #333;
  border-radius: 3px;
  width: 200px;
  padding: 8px 10px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background: #ffc107;
  }

  @media (max-width: ${Breakpoint.sm}em) {
    margin-top: 42px;
  }
`;

export const LoadButton = styled(InfoButton)`
  text-transform: uppercase;
  background: ${Color.darkGray};
  color: white;
  font-weight: normal;
  letter-spacing: 0.08em;
  &:hover {
    background: ${Color.primaryGreen};
    transform: scale(1.1);
  }
`;

export const ActionButton = styled(LoadButton)`
  margin-top: 18px;
`;
