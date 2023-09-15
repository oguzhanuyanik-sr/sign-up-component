import * as yup from 'yup';
import { registerInputsTypes } from './types';

export const schema = yup.object({
  firstName: yup.string().required('First Name cannot be empty'),
  lastName: yup.string().required('Last Name cannot be empty'),
  email: yup
    .string()
    .email('Looks like this is not an email')
    .required('Email cannot be empty'),
  password: yup
    .string()
    .min(8, 'Password is too short')
    .required('Password cannot be empty'),
});

export const registerInputs: registerInputsTypes = [
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email Address',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
  },
];

export const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const formVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};
