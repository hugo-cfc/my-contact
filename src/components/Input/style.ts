import styled, { css } from 'styled-components';

interface InputProps {
  error?: boolean;
}

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  outline: none;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;

  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}
`;
