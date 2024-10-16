import dayjs from 'dayjs/esm';

import { IWallet, NewWallet } from './wallet.model';

export const sampleWithRequiredData: IWallet = {
  id: 32260,
  uuid: 'b9834341-928c-46bd-88bb-3f6283288bf7',
};

export const sampleWithPartialData: IWallet = {
  id: 16101,
  uuid: '166349f2-4a65-4142-a082-a12e01df85f6',
  status: 'BLOCKED',
  balance: 787.36,
  balancesAsOf: dayjs('2024-10-15T20:00'),
  externalId: 'avant que envahir',
  createdBy: 'de façon que conseil d’administration',
  createdDate: dayjs('2024-10-16T12:22'),
  lastModifiedBy: 'tchou tchouu beaucoup coupable',
  lastModifiedDate: dayjs('2024-10-15T21:12'),
};

export const sampleWithFullData: IWallet = {
  id: 1501,
  uuid: '09c61049-213a-4f50-bfa8-1e794e41f1f4',
  type: 'PRIMARY',
  status: 'PENDING',
  level: 'ONE',
  iban: 'LI9700472139472I84232',
  currency: 'bad',
  balance: 25263.18,
  balancesAsOf: dayjs('2024-10-16T12:11'),
  externalId: 'toc bouffer',
  walletHolder: 'c95781b3-cf86-4e36-bb87-96e7d9b0952a',
  createdBy: 'autrement',
  createdDate: dayjs('2024-10-15T22:40'),
  lastModifiedBy: 'loufoque',
  lastModifiedDate: dayjs('2024-10-16T04:58'),
};

export const sampleWithNewData: NewWallet = {
  uuid: '35a5257e-3e04-4fb2-995a-80453f16db07',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
