import React, { useState, useCallback } from 'react';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, ButtonContainer } from './style';

interface ContactFormProps {
  buttonLabel: string;
}

interface Errors {
  field: string;
  message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ buttonLabel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState<Errors[]>([]);

  const handleNameChange = useCallback(e => {
    setName(e.target.value);

    if (!e.target.value) {
      setErrors(prevState => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório!' },
      ]);
    }
  }, []);

  console.log(errors);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log({
        name,
        email,
        phone,
        category,
      });
    },
    [name, email, phone, category],
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input placeholder="Nome" value={name} onChange={handleNameChange} />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
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
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
};

export default ContactForm;
