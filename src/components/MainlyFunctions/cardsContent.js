import React from 'react';
import { ReactComponent as Clock } from '../../assets/images/clock.svg';
import { ReactComponent as Click } from '../../assets/images/click.svg';
import { ReactComponent as Head } from '../../assets/images/head.svg';
import { ReactComponent as Integration } from '../../assets/images/integration.svg';

const cards = [
  {
    image: <Clock />,
    title: 'A Qualquer Hora, em Qualquer Lugar',
    text:
      'O Bizdocs aceita qualquer tipo de documento, da fatura ao talão de caixa, através de qualquer dispositivo, desde um scanner ou multifunções a um simples smartphone.'
  },
  {
    image: <Click />,
    title:
      'Reconhecimento, Classificação, Arquivo, Envio ou Partilha de Documentos',
    text:
      'O Bizdocs aceita qualquer tipo de documento, da fatura ao talão de caixa, através de qualquer dispositivo.'
  },
  {
    image: <Head />,
    title: 'Arquivar sem nunca Esquecer',
    text:
      'Um desejo que todos temos e que o Bizdocs vem agora realizar, gerindo cada documento de forma inteligente, sem esquecer o mais importante.'
  },
  {
    image: <Integration />,
    title: 'Integração Automatizada',
    text:
      'O Bizdocs é compatível com os principais sistemas de contabilidade e gestão, permitindo uma integração imediata e sem disrupção…'
  }
];

export default cards;
