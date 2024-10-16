import dayjs from 'dayjs/esm';

import { ICacheInfo, NewCacheInfo } from './cache-info.model';

export const sampleWithRequiredData: ICacheInfo = {
  id: 16279,
};

export const sampleWithPartialData: ICacheInfo = {
  id: 597,
  walletHolder: '974b4378-79b0-416b-b0eb-43c8fd85cab6',
  key: 'hier bzzz guetter',
  createdDate: dayjs('2024-10-15T22:16'),
};

export const sampleWithFullData: ICacheInfo = {
  id: 7456,
  walletHolder: '3fdabd98-b01a-4bce-9687-2ff349155b93',
  key: 'ailleurs',
  value: '../fake-data/blob/hipster.txt',
  createdDate: dayjs('2024-10-16T07:24'),
};

export const sampleWithNewData: NewCacheInfo = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
