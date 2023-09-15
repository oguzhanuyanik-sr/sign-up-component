import Link from 'next/link';
import React from 'react';
import InputField from '../common/input-field';
import WideButton from '../common/wide-button';

type Props = {};

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
  return (
    <section>
      <WideButton type='link'>
        <>
          Try it free 7 days
          <span className='font-normal'> then $20/mo. thereafter</span>
        </>
      </WideButton>

      <form className='bg-white-100 p-6 rounded-[10px] flex flex-col items-center justify-center gap-4'>
        {registerInputs.map(({ type, name, placeholder }) => (
          <InputField
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
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
