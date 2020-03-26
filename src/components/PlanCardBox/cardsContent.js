import React from 'react';
import { ReactComponent as Stamp } from '../../assets/images/most-popular.svg';

export const cards = [
  {
    cardColor: '#69B643',
    headerTitle: 'MOBI GRÁTIS',
    valueText: '0 €/mês',
    tableContent: [
      {
        value: ['1GB', '300', '1MB'],
        title: ['Armazenamento', 'Limite uploads mês', 'Tamanho máx. upload']
      }
    ],
    buttonText: 'EXPERIMENTE GRÁTIS'
  },
  {
    cardColor: '#ADADAD',
    headerTitle: 'MOBI SILVER',
    valueText: '3.99 €/mês',
    tableContent: [
      {
        value: ['5GB', '300', '5MB'],
        title: ['Armazenamento', 'Limite uploads mês', 'Tamanho máx. upload']
      }
    ],
    buttonText: 'ADERIR',
    stamp: <Stamp />
  },
  {
    cardColor: '#BA9F7A',
    headerTitle: 'MOBI GOLD',
    valueText: '7.99 €/mês',
    tableContent: [
      {
        value: ['10GB', 'Ilimitado', 'Ilimitado'],
        title: ['Armazenamento', 'Limite uploads mês', 'Tamanho máx. upload']
      }
    ],
    buttonText: 'ADERIR'
  }
];

export const second = [
  {
    cardColor: '#656565',
    headerTitle: 'PLATINUM',
    valueText: 'Sob consulta',
    tableContent: [
      {
        value: ['20GB', 'Ilimitado', 'Ilimitado'],
        title: ['Armazenamento', 'Limite uploads mês', 'Tamanho máx. upload']
      }
    ],
    buttonText: 'FALE CONOSCO'
  },
  {
    cardColor: '#1C3144',
    headerTitle: 'PORTAL PME',
    valueText: 'Sob consulta',
    tableContent: [
      {
        value: ['1GB', '300', '1GB'],
        title: ['Armazenamento', 'Limite uploads mês', 'Tamanho máx. upload']
      }
    ],
    buttonText: 'FALE CONOSCO'
  }
];
