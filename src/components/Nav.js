import React from 'react';

import {BiHomeAlt,BiUser} from 'react-icons/bi';
import {BsClipboardData,BsBriefcase,BsChatSquare, BsTextCenter, BsChatSquareText} from 'react-icons/bs';
import {Link} from 'react-scroll';
const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[86px] backdrop-blur-2xl rounded-full max-auto px-5 flex  justify-around items-center text-2xl text-white/50'>
        <Link to='home' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='cursor-pointer w-[45px] h-[45px] flex items-center justify-BsTextCenter'>
        <BiHomeAlt />
        </Link>
        <Link to='about' 
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[45px] h-[45px] flex items-center justify-BsTextCenter'>
          <BiUser />
        </Link>
        <Link to='skills' 
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[45px] h-[45px] flex items-center justify-BsTextCenter'>
          <BsClipboardData />
        </Link>
        <Link to='work' 
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[45px] h-[45px] flex items-center justify-BsTextCenter'>
          <BsBriefcase />
        </Link>
        <Link to='contact' 
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[45px] h-[45px] flex items-center justify-BsTextCenter'>
          <BsChatSquareText />
        </Link>
      </div>
    </div>

  </nav>
}; 
export default Nav;
