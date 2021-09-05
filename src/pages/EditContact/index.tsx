import React from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

import { Container } from './style';

export const EditContact: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Editar Hugo Cesar" />

      <ContactForm buttonLabel="Salvar Alterações" />
    </Container>
  );
};

export default EditContact;
