import styled from 'styled-components';

export const StyledSelect = styled.select`
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

  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
