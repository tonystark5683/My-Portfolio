import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email && !name) {
      toast.error('Please Enter Both your Email & Name.');
      return;
    } 
    else if(!email){
      toast.error('Please Enter your Email.');
      return;
    } 
    else if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.', {
        position: 'top-right',
        autoClose: 5000, // Display for 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    else if(!name) {
      toast.error('Please Enter your Name.');
      return;
    }


    emailjs
      .sendForm('service_2p6i9kz', 'template_0z7yjhj', form.current, 'z0cyQgpdXvPs2Y5UZ')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        showSuccessToast();
        setEmail(''); 
        setName('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  const showSuccessToast = () => {
    toast.success('Message Sent Successfully!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row mb-20'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=' flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-[25px] uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work<br />together!</h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Email'
              name='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Name'
              name='user_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type='submit' value='Send' className='btn btn-lg'>
              Send Message
            </button>
            <ToastContainer />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
