import React from 'react';

import { Container } from './style';

interface FormGroupProps {
  error?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({ children, error }) => {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
};

export default FormGroup;
