import React, { useState, useCallback } from 'react';

import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailvalid';
import formatPhone from '../../utils/formatPhone';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, ButtonContainer } from './style';

interface ContactFormProps {
  buttonLabel: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ buttonLabel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  const handleNameChange = useCallback(
    e => {
      setName(e.target.value);

      if (!e.target.value) {
        setError({ field: 'name', message: 'Nome é obrigatório!' });
      } else {
        removeError('name');
      }
    },
    [setError, removeError],
  );

  const handleEmailChange = useCallback(
    e => {
      setEmail(e.target.value);
      if (e.target.value && !isEmailValid(e.target.value)) {
        setError({ field: 'email', message: 'E-mail inválido!' });
      } else {
        removeError('email');
      }
    },
    [removeError, setError],
  );

  const handlePhoneChange = useCallback(e => {
    setPhone(formatPhone(e.target.value));
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log({
        name,
        email,
        phone: phone.replace(/\D/g, ''),
        category,
      });
    },
    [name, email, phone, category],
  );

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome*"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default ContactForm;
