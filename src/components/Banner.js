import React, { useState } from 'react';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import { Player } from "@lottiefiles/react-lottie-player";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
import profilePhoto from '../assets/freelancer.png'
const phrases = [
  "Hey, click me",
  "do it again",
  "yes go on",
  "don't know why I created this",
  "anyway...",
  "drop me an email if you'd like",
  "...",
  "still playing with this? 😂",
  "you can stop now.",
  "seriously.",
  "checkout the website now ffs!",
];
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handlePhrases = () => {
    if (index === phrases.length - 1) {
      return;
    } else {
      setIndex(index + 1);
    }
  };
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto ' >
      <div className=' flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up',0.3)} initial="hidden"
           whileInView={'show'} viewport={{once:false,amount:0.7}}
           className='text-[55px] font-bold leading-[0.8] lg:text-[110]'>
            KURMI <span>SOURAV</span>
          </motion.h1>
          <motion.div variants={fadeIn('up',0.4)} initial="hidden"
           whileInView={'show'} viewport={{once:false,amount:0.7}}
           className='mb-6 text-[30px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-3'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Coder',
              2000,
              'Photgrapher',
              2000,
              'AI/ML Enthusiast',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>

          <motion.p 
          variants={fadeIn('up',0.5)} initial="hidden"
          whileInView={'show'} viewport={{once:false,amount:0.7}}
          className='mb-8 max-w-lg mx-auto lg:mx-0'>
"Fascinated by all things tech and with a knack for devising solutions, I'm skilled Web-App developer, 
with expertise in machine learning and AI. My passion for designing visually stunning and user-friendly interfaces is at the heart of every project I undertake."
          </motion.p>
          <motion.div 
          variants={fadeIn('up',0.6)} initial="hidden"
          whileInView={'show'} viewport={{once:false,amount:0.7}}
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <a href='#contact'><button className='btn btn-lg'>
              Contact Me
            </button></a>

            <a href='#skills' className='text-gradient btn-link'>
              My Portfolio
            </a>
            <div className="w-fit">
            <Tooltip
              title={phrases[index]}
              placement="right-start"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
            >
              <div>
                <img
                  src={profilePhoto}
                  alt="Amazing"
                  onClick={handlePhrases}
                  id="profilePhoto"
                  className="rounded-full !z-10 lg:h-20 lg:w-20 md:h-16 md:w-16 vvs:h-14 vvs:w-14 w-12 h-12 hover:scale-[1.05] hover:shadow-custom1 hover:-rotate-355 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>
            </Tooltip>
          </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('up',0.3)} initial="hidden"
          whileInView={'show'} viewport={{once:false,amount:0.7}}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/tonystark5683' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/souravpatel5683' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/kurmi_sourav_patel' target='_blank' rel='noopener noreferrer'>
                <FaInstagram />
              </a>
          </motion.div>
        </div>
        <motion.div 
        variants={fadeIn('down',0.5)} initial="hidden"
        whileInView={'show'} 
        className=' sm:max-w-[420px] sm:mx-auto lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <div >
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_m64r7cwa.json"
              />
            </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Banner;
