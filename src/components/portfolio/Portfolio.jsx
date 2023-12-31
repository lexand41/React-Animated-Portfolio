import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './portfolio.scss';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://img.freepik.com/free-photo/motherboard-circuit-technology-background-in-gradient-blue_53876-124645.jpg?w=1480&t=st=1703851046~exp=1703851646~hmac=476fc20a2152f00ff56376127d3d1d70400c91e970263d361b2cf882e0f39f38',
    desc: 'Portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum laborum nihil doloremque harum id repellat ducimus, iure reiciendis incidunt mollitia ab quisquam, adipisci totam unde magni? Aut, est consectetur?',
  },
  {
    id: 2,
    title: 'Next.js Blog',
    img: 'https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-of-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg?w=1480&t=st=1703850947~exp=1703851547~hmac=31f88a9d15ee48a22b82836768c5201e2a3a944d62d2083de1c96d8665ad2f05',
    desc: 'Portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum laborum nihil doloremque harum id repellat ducimus, iure reiciendis incidunt mollitia ab quisquam, adipisci totam unde magni? Aut, est consectetur?',
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    img: 'https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg?w=1480&t=st=1703850993~exp=1703851593~hmac=f7b7545165062e379f55a4fd41deff08118b0c18c20a602d6947e09f80172021',
    desc: 'Portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum laborum nihil doloremque harum id repellat ducimus, iure reiciendis incidunt mollitia ab quisquam, adipisci totam unde magni? Aut, est consectetur?',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://img.freepik.com/free-vector/neon-landing-page-with-smartphone_23-2148348511.jpg?w=1480&t=st=1703851378~exp=1703851978~hmac=6c7a479abd196d8cdbae3df8edac3695a4365281443547855b412c0977ed7973',
    desc: 'Portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum laborum nihil doloremque harum id repellat ducimus, iure reiciendis incidunt mollitia ab quisquam, adipisci totam unde magni? Aut, est consectetur?',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Feature Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
