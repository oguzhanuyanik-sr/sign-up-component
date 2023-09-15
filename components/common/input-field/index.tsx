import Image from 'next/image';
import React from 'react';
import ErrorIcon from '@/public/icon-error.svg';
import { InputFieldProps } from './types';

const InputField = ({
  type,
  name,
  placeholder,
  register,
  errors,
}: InputFieldProps) => {
  const errorMessage = errors[name]?.message;

  return (
    <div className='w-full relative'>
      <input
        className={`${
          !errorMessage ? 'border border-white-200' : 'border border-red-100'
        } outline-none rounded-[5px] px-[18px] py-[22px] w-full placeholder:text-grey-100 text-grey-200 font-semibold text-sm leading-[26px] tracking-wider`}
        type={type}
        placeholder={placeholder}
        autoComplete='off'
        {...register(name)}
      />
      <Image
        src={ErrorIcon}
        alt='Error'
        height={24}
        width={24}
        sizes='100%'
        className={`${
          !errorMessage ? 'hidden' : 'block'
        } absolute right-6 top-[24px]`}
      />
      <p className='w-full text-end pt-1 text-red-100 italic font-semibold text-[11px] pr-1'>
        {errorMessage}
      </p>
    </div>
  );
};

export default InputField;
