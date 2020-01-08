import React from 'react';
import styled from 'styled-components';
import { warningColor } from '../../colors';

const StyledFormError = styled.div`
  text-align: center;
  margin-top: .5rem;
  padding-top: 1rem;
  color: ${warningColor};
  font-size: 1.5rem;
`;

export default function FormError({ message }) {
  return (
    <StyledFormError>
      <span role="img" aria-label="Warning">⚠️</span>
      <span> {message}</span>
    </StyledFormError>
  );
}
