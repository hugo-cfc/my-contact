import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 25px;
    outline: 0;
    padding: 0 16px;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;

    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button {
      background: transparent;
      border: 0;

      display: flex;
      align-items: center;
    }

    span {
      margin-right: 8px;

      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
