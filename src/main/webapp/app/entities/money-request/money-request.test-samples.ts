import dayjs from 'dayjs/esm';

import { IMoneyRequest, NewMoneyRequest } from './money-request.model';

export const sampleWithRequiredData: IMoneyRequest = {
  id: 1865,
  uuid: 'b5078a9c-5c53-4e8c-8d4b-592b5de9d80b',
};

export const sampleWithPartialData: IMoneyRequest = {
  id: 14511,
  uuid: '1b69ad02-f21f-4ca3-bcf5-6781b0b3734b',
  amount: 8685.23,
  description: 'vouh commissionnaire dans la mesure où',
  createdBy: 'coller au lieu de jeune enfant',
  createdDate: dayjs('2024-10-15T16:24'),
  lastModifiedDate: dayjs('2024-10-15T22:26'),
};

export const sampleWithFullData: IMoneyRequest = {
  id: 28623,
  uuid: '5cae119a-3296-4969-be91-813f2b7dd045',
  status: 'PROCESSED',
  otherHolder: 'd10eb8c1-5b01-436a-bdf8-abda1bf346e3',
  amount: 20452.93,
  description: 'lectorat',
  currency: 'tel',
  walletHolder: 'c4ebda2e-0b6a-4df6-83a6-31410ab8180d',
  createdBy: 'hypocrite',
  createdDate: dayjs('2024-10-15T20:56'),
  lastModifiedBy: 'super au-dessous amorphe',
  lastModifiedDate: dayjs('2024-10-16T06:12'),
};

export const sampleWithNewData: NewMoneyRequest = {
  uuid: '782ec57e-2149-46e5-971a-c6125e2a6e44',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
