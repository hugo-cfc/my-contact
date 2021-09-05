import React, { InputHTMLAttributes } from 'react';

import { StyledInput } from './style';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = props => {
  return <StyledInput {...props} />;
};

export default Input;
