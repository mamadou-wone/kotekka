import dayjs from 'dayjs/esm';

import { INotification, NewNotification } from './notification.model';

export const sampleWithRequiredData: INotification = {
  id: 31908,
};

export const sampleWithPartialData: INotification = {
  id: 32137,
  uuid: '7e3b9fef-e3e4-430b-87ad-c8476064d0be',
  heading: 'intrépide causer',
  status: 'FAILED',
  content: 'écouter rapporter bof',
  data: "aussitôt à l'égard de",
  language: 'hô',
};

export const sampleWithFullData: INotification = {
  id: 13615,
  uuid: '143d1bc7-a102-4d47-86eb-8bc84e07e867',
  walletHolder: 'e0b628c8-5b40-470d-9b9b-7c4c7286a17b',
  heading: 'adversaire',
  status: 'PROCESSED',
  content: 'ôter mal',
  data: 'lentement',
  language: 'me',
  createdDate: dayjs('2024-10-16T13:34'),
};

export const sampleWithNewData: NewNotification = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
