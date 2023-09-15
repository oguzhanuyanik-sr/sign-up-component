import React from 'react';

const Header = () => {
  return (
    <header className='text-white-100 flex flex-col items-center md:items-start md:justify-center mb-16 text-center md:text-start md:w-1/2'>
      <h1 className='font-bold text-[28px] md:text-[50px] leading-[36px] md:leading-[55px] pb-4 md:pb-[11px] md:mb-3'>
        Learn to code by
        <br /> watching others
      </h1>
      <p className='text-base leading-[26px] font-medium md:text-lg'>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </header>
  );
};

export default Header;
