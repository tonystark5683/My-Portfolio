import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants';

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='hidden lg:block lg:flex-1 lg:bg-about lg:bg-contain lg:bg-no-repeat lg:h-[590px] lg:bg-top rounded-lg shadow-md  ease-out  hover:scale-[1.05] hover:shadow-custom1 hover:bg-opacity-100 hover:border hover:border-opacity-100 hover:border-solid hover:border-blue-500 hover:animate-border-glow'
        >
        </motion.div>
        <motion.div 
                variants={fadeIn('left',0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false,amount:0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'> 
          I'm a skilled Full Stack Web-App Developer and Designer.
          </h3>
          <p className='mb-6'>
          Hello! I'm a 3rd-year Computer Science Engineering student at VIT Chennai, deeply passionate about technology. I possess a versatile skill set, 
          excelling in web and app development, as well as machine learning and AI. Beyond the tech realm, I'm an avid photographer, constantly seeking for captivating moments to immortalize in my photos. 
          I also have a love for cricket, both playing and watching, and I'm also a passionate anime aficionado.
          </p>
          <div className='flex gap-x-8 items-center'>
            <a href='#contact'><button className='btn btn-lg'>Contact me </button></a>
            <a href='https://drive.google.com/drive/folders/1qPs8lPB03lWITvUvQX6mdNGADsR1czsE' target='_blank' rel='noopener noreferrer' className='text-gradient btn-link'>Download Resume</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
