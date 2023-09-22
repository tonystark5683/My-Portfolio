import React from 'react';
import Logo from '../assets/cooltext442741998835851.png';
import logo2 from '../assets/avatar.png'
const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='flex mix-blend-lighten'>
        <a href='#'>
          <img src={logo2} alt='' className='bg-transparent h-[55px]  '/>
        </a>
        <a className='mb-6 text-[20px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1] mt-4 ml-3 text-gradient btn-link'> Sourav Kurmi
        </a>
        </div>
        <a href='#contact'><button className='btn btn-sm'>Work with me</button></a>
      </div>
    </div>
  </header>);
};

export default Header;
