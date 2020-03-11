import React from 'react';
import { ReactComponent as Information } from '../../assets/images/all-information.svg';
import { ReactComponent as Access } from '../../assets/images/access-control.svg';
import { ReactComponent as Papers } from '../../assets/images/papers.svg';
import { ReactComponent as Share } from '../../assets/images/share-platform.svg';
import { ReactComponent as Functionalities } from '../../assets/images/functionalities.svg';
import { ReactComponent as Integration } from '../../assets/images/automatic-integration.svg';
// import { ReactComponent as Integration } from '../../assets/images/automatic-integration.svg'

const cards = [
  {
    image: <Information />,
    text:
      'Toda a informação do seu negócio centralizada e atualizada num sistema único de arquivo digital, integrado e sincronizado em web cloud'
  },
  {
    image: <Access />,
    text:
      'Controlo e acesso seguro aos seus documentos, a partir de qualquer lugar, em qualquer dispositivo online '
  },
  {
    image: <Papers />,
    text:
      'Digitalize os seus papéis ou faça o upload diretamente através do seu Email ou do seu Smartphone.'
  },
  {
    image: <Share />,
    text:
      'Plataforma de Partilha de Documentos multilateral e em tempo real entre Empresas e Escritórios de Contabilidade'
  },
  {
    image: <Functionalities />,
    text:
      'Funcionalidades que lhe permitem prestar serviços automatizados e melhorar o seu atendimento, reduzindo o grau de erro no processamento documental'
  },
  {
    image: <Integration />,
    text: 'Integra automaticamente com sistemas de gestão e contabilidade'
  },
  {
    image: <Integration />,
    text: 'Assegura total conformidade com o RGPD'
  }
];

export default cards;
