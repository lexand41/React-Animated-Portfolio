import './contact.scss';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yhaak9r', 'template_lxvxdtm', formRef.current, 'dTJQ60TCNCDD6k8Ul')
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      ref={ref}
      className='contact'
      variants={variants}
      initial='initial'
      whileInView='animate'>
      <motion.div className='textContainer' variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className='item' variants={variants}>
          <h2>Mail</h2>
          <span>lexand41s@gmail.com</span>
        </motion.div>
        <motion.div className='item' variants={variants}>
          <h2>Address</h2>
          <span>Hello street Chendek</span>
        </motion.div>
        <motion.div className='item' variants={variants}>
          <h2>Phone</h2>
          <span>+7 913 993-36-95</span>
        </motion.div>
      </motion.div>
      <div className='formContainer'>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}>
          <input type='text' required placeholder='Name' name='name' />
          <input type='email' required placeholder='Email' name='email' />
          <textarea rows={8} placeholder='Message' name='message' />
          <button>Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
