import React from 'react';
import { ReactComponent as Facebook } from '../../../assets/images/icon-fb.svg';
import { ReactComponent as LinkedIn } from '../../../assets/images/icon-in.svg';
import { ReactComponent as Twitter } from '../../../assets/images/icon-twitter.svg';
import { ReactComponent as Instagram } from '../../../assets/images/icon-instagram.svg';
import { ReactComponent as Youtube } from '../../../assets/images/icon-yt.svg';

const footerLinks = {
  about: [
    {
      text: 'Porque o Bizdocs?',
      link: '/bizdocs'
    },
    {
      text: 'Benefícios e funcionalidades',
      link: '/plans/benefits'
    },
    {
      text: 'Segurança',
      link: '/security'
    },
    {
      text: 'Empresas',
      link: '/empresas'
    },
    {
      text: 'Planos e preços',
      link: '/plans-and-prices'
    },
    {
      text: 'Detalhes do plano',
      link: '/plans/plan-details'
    },
    {
      text: 'Novidades',
      link: '/news'
    },
    {
      text: 'Contactos',
      link: ''
    }
  ],
  portal: [
    {
      text: 'Grátis',
      link: ''
    },
    {
      text: 'Platinum',
      link: ''
    }
  ],
  empresas: [
    {
      text: 'Grátis',
      Link: ''
    },
    {
      text: 'Silver',
      Link: ''
    },
    {
      text: 'Gold',
      Link: ''
    },
    {
      text: 'Platinum',
      Link: ''
    },
    {
      text: 'Portal',
      Link: ''
    }
  ],
  login: [
    {
      text: 'Registo',
      link: ''
    },
    {
      text: 'Política de privacidade',
      link: ''
    },
    {
      text: 'Termos e condições',
      link: ''
    },
    {
      text: 'Mapa do site',
      link: ''
    }
  ],
  social: [
    {
      logo: <Facebook />,
      alt: 'Facebook'
    },
    {
      logo: <LinkedIn />,
      alt: 'LinkedIn'
    },
    {
      logo: <Twitter />,
      alt: 'Twitter'
    },
    {
      logo: <Instagram />,
      alt: 'Instagram'
    },
    {
      logo: <Youtube />,
      alt: 'Youtube'
    }
  ]
};

export default footerLinks;
