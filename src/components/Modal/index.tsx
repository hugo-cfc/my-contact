import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';

import { Overlay, Container } from './style';

interface ModalProps {
  danger?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ danger }) => {
  const elFullscreenRoot = document.getElementById('fullscreen-root')!;

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título do Modal.</h1>

        <p>Corpo do modal.</p>

        <footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>

          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </footer>
      </Container>
    </Overlay>,
    elFullscreenRoot,
  );
};

export default Modal;
