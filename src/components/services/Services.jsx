import './services.scss';
import { motion } from 'framer-motion';

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

const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial='initial' whileInView='animate'>
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping yout brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='' />
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Busiess
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div className='box' whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla dolore, ipsa
            optio, at tenetur accusamus quis maiores minima repudiandae aspernatur necessitatibus
            ullam, esse similique sed corporis et neque! Facilis!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className='box' whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla dolore, ipsa
            optio, at tenetur accusamus quis maiores minima repudiandae aspernatur necessitatibus
            ullam, esse similique sed corporis et neque! Facilis!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className='box' whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla dolore, ipsa
            optio, at tenetur accusamus quis maiores minima repudiandae aspernatur necessitatibus
            ullam, esse similique sed corporis et neque! Facilis!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className='box' whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla dolore, ipsa
            optio, at tenetur accusamus quis maiores minima repudiandae aspernatur necessitatibus
            ullam, esse similique sed corporis et neque! Facilis!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
