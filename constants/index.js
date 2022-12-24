import { FaFacebook, FaInstagram } from 'react-icons/fa';
import bread1 from '../public/img/hero/Bread1.svg';
import bread2 from '../public/img/hero/Bread2.svg';
import bread3 from '../public/img/hero/Bread3.svg';
import cake1 from '../public/img/hero/cupcake1.svg';
import cake2 from '../public/img/hero/cupcake2.svg';
import cake3 from '../public/img/hero/cupcake3.svg';
/* padaria inicio */
export const socials = [
  {
    key: 'instagram',
    icon: FaInstagram,
    motionVariant: 2.0,
  },
  {
    key: 'instagram',
    icon: FaFacebook,
    motionVariant: 2.2,
  },
];
export const CakesBreads = {
  breads: [
    {
      key: 'bread-01',
      image: bread1,
      position: 'bread1',
      motionVariant: 1.5,
    },
    {
      key: 'bread-02',
      image: bread2,
      position: 'bread2',
      motionVariant: 1.7,
    },
    {
      key: 'bread-03',
      image: bread3,
      position: 'bread3',
      motionVariant: 2,
    },
    {
      key: 'cake-01',
      image: cake1,
      position: 'cake1',
      motionVariant: 2.4,
    },
    {
      key: 'cake-03',
      image: cake2,
      position: 'cake2',
      motionVariant: 2.6,
    },
    {
      key: 'cake-03',
      image: cake3,
      position: 'cake3',
      motionVariant: 2.7,
    },
  ],
};
export const CardsSection = [
  {
    key: 'card-01',
    image: 'bgcard1',
    title: 'Pães deliciosos',
    subtitle: 'Pães incríveis para todos os gostos!',
    link: '/',
    motionVariant: 0.5,
  },
  {
    key: 'card-01',
    image: 'bgcard2',
    title: 'Cupcakes',
    subtitle: 'Cupcakes deliciosos!',
    link: '/',
    motionVariant: 0.9,
  },
  {
    key: 'card-01',
    image: 'bgcard3',
    title: 'Bolos',
    subtitle: 'Bolos doces e salgados!',
    link: '/',
    motionVariant: 1.3,
  },
];
/* padaria fim */
