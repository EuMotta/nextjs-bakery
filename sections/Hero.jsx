'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypingText } from '../components';
import { CakesBreads, socials } from '../constants';
import styles from '../styles';
import {
  slideIn,
  staggerContainer,
  textVariant,
  navVariants,
} from '../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}

const Hero = () => (
  <section id="Hero" className={`${styles.yPaddings} sm:16 herobg sm:pl-6 `}>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.xPaddings} py-8  z-10 `}
    >
      <div className=" w-[50%] inset-0 gradient-01" />
      <TypingText
        title="Seja bem-vindo(a)!"
        textStyles="sm:text-center sm:text-lg md:text-xl md:text-center lg:text-2xl text-slate-50 text-white font-bold "
      />
    </motion.nav>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {CakesBreads.breads.map((bread) => (
        <motion.div
          key={bread.key}
          variants={textVariant(bread.motionVariant)}
          drag
          dragConstraints={{
            top: 50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          className={bread.position}
        >
          <Image
            src={bread.image}
            width={100}
            height={100}
            alt=""
            unoptimized
            onDragStart={ImpedirArrastar}
            className=""
          />
        </motion.div>
      ))}
      <div className="flex justify-between items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading1} font-bakery`}
        >
          Padaria
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading2} font-bakery font-bold`}>
            Recheada
          </h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[10px] -mt-[12px]"
      >
        <div className="w[90%] mx-10 bg-red-50 shadow-sm shadow-red-50 dark:bg-white h-2 mt-5 rounded-full mb-20" />
      </motion.div>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div
          className={`${styles.flexCenter} gap-x-4 mb-48 text-slate-900 dark:text-white text-4xl`}
        >
          {socials.map((social) => (
            <motion.li
              key={social.name}
              variants={textVariant(social.motionVariant)}
              className={`${styles.width} flex justify-center text-white items-center`}
            >
              <social.icon />
            </motion.li>
          ))}
        </div>
      </motion.ul>
    </motion.div>
  </section>
);

export default Hero;
