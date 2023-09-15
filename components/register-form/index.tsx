'use client';
import Link from 'next/link';
import React from 'react';
import InputField from '../common/input-field';
import WideButton from '../common/wide-button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Props = {};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const schema = yup.object({
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

const registerInputs = [
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

const RegisterForm = (props: Props) => {
  const form = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section className='md-1/2'>
      <WideButton type='link'>
        <>
          Try it free 7 days
          <span className='font-normal'> then $20/mo. thereafter</span>
        </>
      </WideButton>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white-100 p-6 rounded-[10px] flex flex-col items-center justify-center gap-4'
      >
        {registerInputs.map(({ type, name, placeholder }) => (
          <InputField
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            register={register}
            errors={errors}
          />
        ))}

        <div className='w-full'>
          <WideButton type='button'>CLAIM YOUR FREE TRIAL</WideButton>
          <p className='text-purple-200 text-xs leading-[26px] font-medium text-center mt-2'>
            By clicking the button, you are agreeing to our
            <Link href='/' className='text-red-100 font-bold'>
              {' '}
              Terms and Services
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
