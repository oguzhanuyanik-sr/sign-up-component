import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type InputFieldProps = {
  type: string;
  name: 'firstName' | 'lastName' | 'email' | 'password';
  placeholder: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};
