import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';

import arrowIcon from '../../assets/icons/arrowIcon.svg';

import { Container, InputContainer, Header, ListContainer } from './style';

export const Home: React.FC = () => {
  return (
    <Container>
      <Loader />
      <InputContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>

            <img src={arrowIcon} alt="Nome" />
          </button>
        </header>

        <Card />
      </ListContainer>
    </Container>
  );
};

export default Home;
