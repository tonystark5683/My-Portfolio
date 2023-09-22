import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
const skills = [
  {
    name: 'Web-Developer',
    description: 
    'Experienced full-stack web developer adept at creating seamless user interfaces and robust back-end solutions for web applications',
    link: 'Explore More',
  },
  {
    name: 'App-Developer',
    description: 
    'As a capable Flutter developer, I excel at orchestrating every step of mobile app development, from conceptualization to deployment, delivering outstanding user experiences.',
    link: 'Explore More',
  },
  {
    name: 'UI/UX Designer',
    description: 
    'I use design tools to create clear and user-friendly designs and prototypes. My designs help businesses grow by making products that are easy to use and accessible to everyone.',
    link: 'Explore More',
  },
  {
    name: 'Photographer',
    description: 
    'I capture moments that tell stories. My lens transforms ordinary scenes into extraordinary memories, preserving emotions and experiences in timeless photographs.',
    link: 'Explore More',
  },
]
const Skills = () => {
  
  return (
  <section className='section' id='skills'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
                variants={fadeIn('right',0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false,amount:0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h4 max-w-[455px] mb-10'>
          "Explore below my diverse portfolio of creative works, featuring web and app development, design, and photography Skills."</h3>

          <Link to='work' 
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer flex items-center justify-BsTextCenter'>
            <button className='btn btn-sm'>See My Latest Work</button>
          </Link>
          
        </motion.div>
        <motion.div 
                        variants={fadeIn('left',0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once:false,amount:0.3}}
         className='flex-1'>
          <div>
            {skills.map((skills,index)=>{
              const{name,description,link} = skills
              return(
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='leading-tight font-secondary'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight></BsArrowUpRight>
                    </a>
                    <a href='#' className='text-gradient text-sm'>{link}</a>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Skills;
