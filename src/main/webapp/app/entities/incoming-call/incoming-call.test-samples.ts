import dayjs from 'dayjs/esm';

import { IIncomingCall, NewIncomingCall } from './incoming-call.model';

export const sampleWithRequiredData: IIncomingCall = {
  id: 20280,
};

export const sampleWithPartialData: IIncomingCall = {
  id: 943,
  partner: 'CMI',
  api: 'brave',
  requestHeaders: '../fake-data/blob/hipster.txt',
  requestBody: '../fake-data/blob/hipster.txt',
};

export const sampleWithFullData: IIncomingCall = {
  id: 21100,
  partner: 'OTHER',
  api: 'hebdomadaire',
  method: 'DELETE',
  requestHeaders: '../fake-data/blob/hipster.txt',
  requestBody: '../fake-data/blob/hipster.txt',
  createdDate: dayjs('2024-10-16T05:15'),
  responseStatusCode: 358,
  responseTime: dayjs('2024-10-15T17:24'),
};

export const sampleWithNewData: NewIncomingCall = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
