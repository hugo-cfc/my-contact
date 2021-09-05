import React from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

import { Container } from './style';

export const NewContact: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" />
    </Container>
  );
};

export default NewContact;
