import dayjs from 'dayjs/esm';

import { IDevice, NewDevice } from './device.model';

export const sampleWithRequiredData: IDevice = {
  id: 22701,
  uuid: '3d73c055-eb77-4238-9380-ed7c31f8cc75',
};

export const sampleWithPartialData: IDevice = {
  id: 32077,
  uuid: '0f62b0eb-c139-4d30-a3a7-23e2fbd3a8da',
  model: 'alors que derrière rédaction',
  appVersion: 'ouch sitôt que séculaire',
  inactive: false,
  createdBy: 'direction proche',
  createdDate: dayjs('2024-10-16T02:27'),
  lastModifiedBy: 'moins accorder',
};

export const sampleWithFullData: IDevice = {
  id: 31379,
  uuid: '965c3fb1-1fe8-4d6a-b178-03bd06438b26',
  deviceUuid: 'que si moderne',
  type: 'partout',
  manufacturer: 'rose au lieu de',
  model: 'plouf',
  os: 'guide pff clac',
  appVersion: 'entre',
  inactive: true,
  createdBy: 'clac clientèle turquoise',
  createdDate: dayjs('2024-10-16T03:00'),
  lastModifiedBy: 'bon',
  lastModifiedDate: dayjs('2024-10-15T16:09'),
};

export const sampleWithNewData: NewDevice = {
  uuid: '02e63154-0624-490a-a298-a9c5c3cc6033',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
