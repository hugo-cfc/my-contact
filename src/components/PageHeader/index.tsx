import React from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../../assets/icons/arrowIcon.svg';

import { Container } from './style';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Link to="/">
        <img src={arrowIcon} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
};

export default PageHeader;
