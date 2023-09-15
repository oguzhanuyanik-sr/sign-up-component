import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='text-white-100 flex flex-col items-center mb-16 text-center'>
      <h1 className='font-bold text-[28px] md:text-[50px] leading-[36px] md:leading-[55px] pb-4 md:pb-[11px]'>
        Learn to code by
        <br /> watching others
      </h1>
      <p className='text-base leading-[26px] font-medium'>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </header>
  );
};

export default Header;
