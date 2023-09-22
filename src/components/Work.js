import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/img3.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img4.png'
const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
                                variants={fadeIn('right',0.2)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{once:false,amount:0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br/> Work.</h2>
            <p className='max-w-sm mb-8'>    Welcome to my creative space. Explore my latest projects below, and feel free to
    get in touch if you have any questions or want to discuss potential collaborations.</p>
            <div className='flex  items-center'>
            <button className='btn btn-sm mr-5'>View All Projects</button>
            <a href='#contact'><button className='btn btn-sm'>
              Contact Me
            </button></a>
            </div>

          </div>
           <a href='https://bnb-rental.vercel.app/' target="_blank" rel="noreferrer">

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt=''></img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Full-Stack Website</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Airbnb-Clone</span>
            </div>
          </div></a>
        </motion.div>
        <motion.div 
                                variants={fadeIn('left',0.2)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{once:false,amount:0.3}}
        className='flex-1 flex flex-col gap-y-10'>
           <a href='https://movie-zone-eta.vercel.app/' target="_blank" rel="noreferrer">

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt=''></img>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Frontend Website</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Movie App</span>
              </div>
            </div></a>

            <a href='https://gym-mate-tony.vercel.app/' target="_blank" rel="noreferrer">
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt=''></img>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Frontend Website</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Gym-Mate</span>
              </div>
            </div></a>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;
