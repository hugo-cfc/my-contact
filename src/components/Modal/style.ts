import styled, { css } from 'styled-components';

export const Overlay = styled.header`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);

  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ContainerProps {
  danger?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  width: 100%;
  max-width: 450px;
  border-radius: 4px;
  padding: 24px;

  h1 {
    font-size: 22px;
    ${props =>
      props.danger &&
      css`
        color: ${({ theme }) => theme.colors.danger.main};
      `}
  }

  p {
    margin-top: 8px;
  }

  footer {
    margin-top: 32px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancel-button {
      background: transparent;
      color: ${({ theme }) => theme.colors.gray[200]};

      border: 0;
      margin-right: 8px;

      font-size: 16px;
    }
  }
`;
