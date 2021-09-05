import React, { SelectHTMLAttributes } from 'react';

import { StyledSelect } from './style';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select: React.FC<SelectProps> = props => {
  return <StyledSelect {...props} />;
};

export default Select;
