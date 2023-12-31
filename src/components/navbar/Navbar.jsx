import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='logoContainer'>
          <img src='/logo_of_41.png' alt='' />
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            FORTY FIRST
          </motion.span>
        </motion.div>
        <motion.div
          className='social'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <a href='#'>
            <img src='/whatsapp.svg' alt='' />
          </a>
          <a href='#'>
            <img src='/telegram.svg' alt='' />
          </a>
          <a href='#'>
            <img src='/vk.svg' alt='' />
          </a>
          <a href='#'>
            <img src='/youtube.svg' alt='' />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
