import React from 'react';

type Props = {};

const InputField = ({ type, name, placeholder }: Props) => {
  return (
    <input
      className='outline-none border border-white-200 rounded-[5px] px-[18px] py-[22px] w-full placeholder:text-grey-200 text-grey-100 font-semibold text-sm leading-[26px] tracking-wider'
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete='off'
    />
  );
};

export default InputField;
