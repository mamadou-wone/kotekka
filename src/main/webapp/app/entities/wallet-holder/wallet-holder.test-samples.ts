import dayjs from 'dayjs/esm';

import { IWalletHolder, NewWalletHolder } from './wallet-holder.model';

export const sampleWithRequiredData: IWalletHolder = {
  id: 7129,
  uuid: 'afc5c5dc-bce0-40db-97fb-74eb639857cd',
};

export const sampleWithPartialData: IWalletHolder = {
  id: 18384,
  uuid: 'd05ec47b-3a2e-465b-9a59-df8dd2079477',
  type: 'AGENT',
  phoneNumber: 'pourvu que infiniment',
  tag: 'affable toc-toc de manière à ce que',
  firstName: 'Léopoldine',
  city: 'Ajaccio',
  country: 'Géorgie',
  onboarding: 'PERSONAL_INFO',
  sex: 'M',
  createdBy: 'bien que',
  createdDate: dayjs('2024-10-16T03:44'),
  lastModifiedBy: 'sur',
};

export const sampleWithFullData: IWalletHolder = {
  id: 28413,
  uuid: '146fa804-f200-4087-a867-e77e59a0d923',
  type: 'AGENT',
  status: 'PENDING',
  phoneNumber: 'zzzz parce que',
  network: 'ORANGE',
  tag: 'multiple prout',
  firstName: 'Antoine',
  lastName: 'Charpentier',
  address: 'police émérite concurrence',
  city: 'Champigny-sur-Marne',
  country: 'Andorre',
  postalCode: 'mince juriste',
  onboarding: 'SET_PASSWORD',
  externalId: 'au-dedans de',
  email: 'Azeline.Dupont0@hotmail.fr',
  dateOfBirth: dayjs('2024-10-16'),
  sex: 'F',
  createdBy: "d'après au point que",
  createdDate: dayjs('2024-10-16T10:08'),
  lastModifiedBy: 'extra',
  lastModifiedDate: dayjs('2024-10-16T00:37'),
  loginStatus: 'LOGIN_LOCKED',
};

export const sampleWithNewData: NewWalletHolder = {
  uuid: '2eacf836-da4a-44d8-8058-948b38945904',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
