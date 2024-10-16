import dayjs from 'dayjs/esm';

import { ICard, NewCard } from './card.model';

export const sampleWithRequiredData: ICard = {
  id: 12185,
  uuid: '5c26a3b3-78c4-4e20-9f60-30ec77416297',
};

export const sampleWithPartialData: ICard = {
  id: 28631,
  uuid: '0513d8f7-2c5f-4b44-b3ff-9f01f26758ee',
  label: 'vis-à-vie de carrément',
  expiryYear: 'pa',
  expiryMonth: 'bi',
  hash: 'désormais quant à au cas où',
  createdBy: 'tic-tac',
  createdDate: dayjs('2024-10-16T12:11'),
};

export const sampleWithFullData: ICard = {
  id: 26645,
  uuid: 'c02415ab-e254-4d96-a9f7-7e330eae225a',
  status: 'BLOCKED',
  label: 'concilier placide lasser',
  maskedPan: 'murmurer avertir provoquer',
  cardHolderName: 'conclure vraisemblablement pre',
  token: 'répondre assez',
  expiryYear: 'ém',
  expiryMonth: 're',
  rnd: 'dans céans',
  hash: 'sacrifier',
  walletHolder: '43abfd68-64be-4f1a-815f-14414f91d840',
  createdBy: 'tsoin-tsoin cocorico',
  createdDate: dayjs('2024-10-16T10:12'),
  lastModifiedBy: 'snob',
  lastModifiedDate: dayjs('2024-10-16T07:50'),
};

export const sampleWithNewData: NewCard = {
  uuid: '4a6a6b78-3dbf-4f28-a653-5d1e8d3e71ee',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
