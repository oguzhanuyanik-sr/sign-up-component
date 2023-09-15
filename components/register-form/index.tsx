'use client';
import Link from 'next/link';
import React from 'react';
import InputField from '../common/input-field';
import WideButton from '../common/wide-button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  schema,
  registerInputs,
  defaultValues,
  formVariants,
} from './constants';
import { FormValues } from './types';
import { motion } from 'framer-motion';

const RegisterForm = () => {
  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    const { firstName, lastName, email, password } = data;

    alert(
      `Thank you for signing up ❤️\n\n${firstName}\n${lastName}\n${email}\n${password}\n`
    );

    reset();
  };

  return (
    <motion.div
      initial='initial'
      animate='show'
      variants={formVariants}
      className='md-1/2'
    >
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
          <p className='text-purple-100 text-xs leading-[26px] font-medium text-center mt-2'>
            By clicking the button, you are agreeing to our
            <Link href='/' className='text-red-100 font-bold'>
              {' '}
              Terms and Services
            </Link>
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default RegisterForm;
