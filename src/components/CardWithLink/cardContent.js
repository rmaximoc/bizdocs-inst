import React from 'react';
import { ReactComponent as ConformityDL } from '../../assets/images/conformidade-dl28.svg';
import { ReactComponent as Security } from '../../assets/images/security.svg';
import { ReactComponent as ConformityRG } from '../../assets/images/conformidade-rgpd.svg';

export const cards = [
  {
    image: <ConformityDL fill="#69b643" />,
    title: 'Em conformidade com o DL28/19',
    paragraph:
      'O Decreto-Lei 28 de 2019 veio libertar as empresas da necessidade de manter em arquivo físico (papel) quase todos os documentos contabilísticos e uma grande parte dos restantes.',
    linkText: 'Saber Mais',
    href: '#'
  },
  {
    image: <Security />,
    title: 'Segurança',
    paragraph:
      'A encriptação blindada de última geração e os níveis de acesso totalmente parametrizáveis, fazem com que os seus documentos estejam exclusivamente…',
    linkText: 'Saber Mais',
    href: '#'
  },
  {
    image: <ConformityRG />,
    title: 'RGPD',
    paragraph:
      'A permanente actualização do Bizdocs quanto à mais recente legislação europeia e nacional implica que o armazenamento e tratamento de dados está sempre…',
    linkText: 'Saber Mais',
    href: '#'
  }
];

export default cards;
