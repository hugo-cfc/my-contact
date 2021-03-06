import React, { InputHTMLAttributes } from 'react';

import { StyledInput } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean | string;
}

export const Input: React.FC<InputProps> = props => <StyledInput {...props} />;

export default Input;
