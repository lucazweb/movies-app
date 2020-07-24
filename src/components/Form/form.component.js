import React from 'react';
import { StyledForm, StyledInput } from './form.styled';

export const Form = (props) => {
  return <StyledForm {...props} />;
};

export const Input = (props) => {
  return <StyledInput {...props} />;
};
