'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';
import { CardsSection } from '../constants';

const Cards = () => (
  <section className={`${styles.xPaddings} ${styles.yPaddings} sm:16 sm:pl-6 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="grid grid-cols-3 gap-x-10">
        {CardsSection.map((card) => (
          <div key={card.id} className="col-span-1">
            <div className="">
              <motion.div
                variants={textVariant(card.motionVariant)}
                className="flex justify-center"
              >
                <div className={`${card.image}  bg-slate-100 h-96 w-72 hover:-translate-y-1 justify-end transition-all flex flex-col rounded-xl shadow-lg shadow-slate-900 p-5`}>
                  <div className="grid gap-y-2 mb-2">
                    <div className="text-white text-center font-bakery text-5xl">
                      {card.title}
                    </div>
                    <div className="text-white text-center font-serif text-xl">
                      {card.subtitle}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Link
                      href={`${card.link}`}
                      className="bg-orange-600 hover:bg-orange-700 transition-all hover:scale-105 px-5 py-1 text-white rounded-md shadow shadow-slate-900"
                    >
                      Confira!
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Cards;
