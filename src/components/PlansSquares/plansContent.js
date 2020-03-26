import React from 'react';
import { ReactComponent as Stamp } from '../../assets/images/most-popular.svg';

const card = [
  {
    planPrice: '0€/Mês',
    plan: 'Mobi Grátis',
    color: '#69B643'
  },
  {
    planPrice: '3,99€/Mês',
    plan: 'Mobi Silver',
    color: '#ADADAD',
    stamp: <Stamp />
  },
  {
    planPrice: '7,99€/Mês',
    plan: 'Mobi Gold',
    color: '#B99769'
  },
  {
    planPrice: 'Consultar',
    plan: 'Platinum',
    color: '#656565'
  },
  {
    planPrice: 'Consultar',
    plan: 'Portal',
    color: '#1C3144'
  }
];

export default card;
