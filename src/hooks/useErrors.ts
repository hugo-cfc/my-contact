import { useState } from 'react';

interface Errors {
  field: string;
  message: string;
}

interface useErrorsData {
  setError({ field, message }: Errors): void;
  removeError(fieldName: string): void;
  getErrorMessageByFieldName(fieldName: string): string | undefined;
}

export const useErrors = (): useErrorsData => {
  const [errors, setErrors] = useState<Errors[]>([]);

  const setError = ({ field, message }: Errors): void => {
    const errorAlreadyExists = errors.find(error => error.field === 'email');

    if (errorAlreadyExists) return;

    setErrors(prevState => [...prevState, { field, message }]);
  };

  const removeError = (fieldName: string): void => {
    setErrors(prevState =>
      prevState.filter(error => error.field !== fieldName),
    );
  };

  const getErrorMessageByFieldName = (
    fieldName: string,
  ): string | undefined => {
    return errors.find(error => error.field === fieldName)?.message;
  };

  return { setError, removeError, getErrorMessageByFieldName };
};

export default useErrors;
