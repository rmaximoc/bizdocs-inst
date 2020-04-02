import React from 'react';
import { ReactComponent as Check } from '../../assets/images/check.svg';
import { ReactComponent as Xis } from '../../assets/images/xis.svg';

export const characteristics = [
  {
    bgColor: '#F4F4F4',
    main: 'Armazenamento',
    first: '1GB',
    second: '5GB',
    third: '10GB',
    fourth: '20GB',
    fifth: '20GB'
  },
  {
    bgColor: '#FCFCFC',
    main: 'Limite uploads mês',
    first: '300',
    second: '1500',
    third: 'Ilimitado',
    fourth: 'Ilimitado',
    fifth: 'Ilimitado'
  },
  {
    bgColor: '#F4F4F4',
    main: 'Tamanho máx. upload (por ficheiro)',
    first: '1MB',
    second: '5MB',
    third: 'Ilimitado',
    fourth: 'Ilimitado',
    fifth: 'Ilimitado'
  },
  {
    bgColor: '#FCFCFC',
    main: 'Empresas incluídas / máx. empresas',
    first: '1/1',
    second: '1/1',
    third: '1/1',
    fourth: '1/1',
    fifth: '1/ ilimitado'
  },
  {
    bgColor: '#F4F4F4',
    main: 'Utilizadores incluídos / máx. utilizadores',
    first: '1/1',
    second: '1/1',
    third: '1/2',
    fourth: '2/ ilimitado',
    fifth: '2/ ilimitado'
  },
  {
    bgColor: '#FCFCFC',
    main: 'Clientes incluídos / máx. clientes',
    first: <Xis />,
    second: <Xis />,
    third: <Xis />,
    fourth: <Xis />,
    fifth: <Xis />
  },
  {
    bgColor: '#F4F4F4',
    main: 'Configuração de caixas de email',
    first: '1',
    second: '1',
    third: '2',
    fourth: '5',
    fifth: '5'
  },
  {
    bgColor: '#FCFCFC',
    main: 'Partilha de documentos com Gab. Contabilidade',
    first: <Check fill="#69b643" />,
    second: <Check fill="#69b643" />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#F4F4F4',
    main: 'Partilha de documentos com clientes',
    first: <Xis />,
    second: <Xis />,
    third: <Xis />,
    fourth: <Xis />,
    fifth: <Xis />
  }
];

export const functionalities = [
  {
    bgColor: '#F4F4F4',
    main: 'Conformidade com DL28/2019',
    first: <Check fill="#69b643" />,
    second: <Check fill="#69b643" />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#FCFCFC',
    main: 'Conformidade com o RGPD e a ePrivacy',
    first: <Check fill="#69b643" />,
    second: <Check fill="#69b643" />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#F4F4F4',
    main: 'Máxima segurança documental',
    first: <Check fill="#69b643" />,
    second: <Check fill="#69b643" />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#FCFCFC',
    main: 'Bizdocs App (Android)',
    first: <Check fill="#69b643" />,
    second: <Check fill="#69b643" />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#F4F4F4',
    main: 'Arquivo dinâmico',
    first: <Check fill="#69b643" />,
    second: <Check fill="#69b643" />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#FCFCFC',
    main: 'Smart Scan Multi-Device',
    first: <Check fill="#69b643" />,
    second: <Check fill="#69b643" />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#F4F4F4',
    main: 'Pesquisa simples',
    first: <Xis />,
    second: <Check fill="#69b643" />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#FCFCFC',
    main: 'Pesquisa avançada',
    first: <Xis />,
    second: <Xis />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#F4F4F4',
    main: 'Split/merge e agrupamento de documentos',
    first: <Xis />,
    second: <Xis />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#FCFCFC',
    main: 'Smart OCR com Machine Learning',
    first: <Xis />,
    second: <Xis />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#F4F4F4',
    main: 'Print Driver Bizdocs',
    first: <Xis />,
    second: <Xis />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#FCFCFC',
    main: 'Mailbox dedicada, para upload directo',
    first: <Xis />,
    second: <Xis />,
    third: <Check fill="#69b643" />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#F4F4F4',
    main: 'Integração com os seus sistemas (ERP)',
    first: <Xis />,
    second: <Xis />,
    third: <Xis />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  },
  {
    bgColor: '#FCFCFC',
    main: 'Ajuda por Chatbot - Giulia',
    first: <Xis />,
    second: <Xis />,
    third: <Xis />,
    fourth: <Check fill="#69b643" />,
    fifth: <Check fill="#69b643" />
  }
];

export const adon = [
  {
    bgColor: '#F4F4F4',
    main: 'Extração e Contabilização Inteligentes',
    first: <Xis />,
    second: <Xis />,
    third: <Xis />,
    fourth: <Xis />,
    fifth: <Xis />
  },
  {
    bgColor: '#FCFCFC',
    main: 'Automatização de Fluxos Documentais',
    first: <Xis />,
    second: <Xis />,
    third: <Xis />,
    fourth: <Xis />,
    fifth: <Xis />
  }
];
