import Link from 'next/link';
import React from 'react';
import { WideButtonProps } from './types';

const WideButton = ({ children, type }: WideButtonProps) => {
  return (
    <>
      {type === 'link' ? (
        <div className='flex flex-col items-center justify-center purpleShadow mb-6'>
          <Link
            href='/'
            className='text-[15px] leading-[26px] font-bold text-white-100 bg-purple-200 px-2 py-[20px] w-full text-center rounded-[10px] hover:bg-purple-300 transition-all'
          >
            {children}
          </Link>
        </div>
      ) : (
        <div className='w-full flex flex-col items-center justify-center greenShadow mb-6'>
          <button
            className='bg-green-200 text-[15px] leading-[26px] font-bold text-white-100 px-2 py-[20px] w-full text-center rounded-[10px] hover:bg-green-100 transition-all z-20'
            type='submit'
          >
            {children}
          </button>
        </div>
      )}
    </>
  );
};

export default WideButton;
