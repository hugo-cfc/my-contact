import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  danger?: boolean;
}

export const Button: React.FC<ButtonProps> = props => (
  <StyledButton {...props} />
);

export default Button;
