import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes';

import logo from '../../assets/images/logo.svg';

import GlobalStyles from '../../styles/global';
import { defaultTheme } from '../../styles/themes/default';
import { Container } from './style';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Container>
          <div className="container-logo">
            <img src={logo} alt="MyContacts" />
          </div>

          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
