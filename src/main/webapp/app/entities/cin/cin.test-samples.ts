import dayjs from 'dayjs/esm';

import { ICin, NewCin } from './cin.model';

export const sampleWithRequiredData: ICin = {
  id: 16399,
};

export const sampleWithPartialData: ICin = {
  id: 21917,
  validityDate: dayjs('2024-10-15'),
  fatherName: 'ouille',
  nationalityCode: 'tant selon',
  issuingCountry: 'tellement',
  issuingCountryCode: 'pré',
  civilRegister: 'cot cot',
  sex: 'aut',
  walletHolder: '990c3000-e7a7-492e-80d3-8292c25cd751',
  createdDate: dayjs('2024-10-16T12:48'),
};

export const sampleWithFullData: ICin = {
  id: 14325,
  cinId: 'adorable',
  validityDate: dayjs('2024-10-15'),
  birthDate: dayjs('2024-10-15'),
  birthPlace: 'sur en',
  firstName: 'Tancrède',
  lastName: 'Mercier',
  birthCity: 'ha',
  fatherName: 'conseil d’administration efficace',
  nationality: 'loin de tant que presque',
  nationalityCode: 'athlète hormis presque',
  issuingCountry: 'parfois',
  issuingCountryCode: 'soi',
  motherName: 'ensemble arrière avant de',
  civilRegister: 'évoluer',
  sex: 'déj',
  address: 'hebdomadaire après meuh',
  birthCityCode: 'éne',
  walletHolder: '3c2b64d7-cd53-4453-8b26-46145eb77e7e',
  createdDate: dayjs('2024-10-16T06:31'),
};

export const sampleWithNewData: NewCin = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
