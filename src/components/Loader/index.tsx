import React from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from './style';

export const Loader: React.FC = () => {
  const elFullscreenRoot = document.getElementById('fullscreen-root')!;

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    elFullscreenRoot,
  );
};

export default Loader;
