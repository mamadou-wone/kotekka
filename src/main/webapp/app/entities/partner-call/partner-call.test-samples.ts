import dayjs from 'dayjs/esm';

import { IPartnerCall, NewPartnerCall } from './partner-call.model';

export const sampleWithRequiredData: IPartnerCall = {
  id: 7511,
  partner: 'WAFR',
};

export const sampleWithPartialData: IPartnerCall = {
  id: 236,
  partner: 'CIH',
  method: 'PATCH',
  requestHeaders: '../fake-data/blob/hipster.txt',
  requestTime: dayjs('2024-10-15T19:31'),
  responseStatusCode: 173,
  responseHeaders: '../fake-data/blob/hipster.txt',
  responseBody: '../fake-data/blob/hipster.txt',
  responseTime: dayjs('2024-10-16T04:18'),
  queryParam: 'de crainte que soit',
};

export const sampleWithFullData: IPartnerCall = {
  id: 29402,
  partner: 'CIH',
  api: 'présidence énergique à force de',
  method: 'GET',
  requestHeaders: '../fake-data/blob/hipster.txt',
  requestBody: '../fake-data/blob/hipster.txt',
  requestTime: dayjs('2024-10-15T17:32'),
  responseStatusCode: 13,
  responseHeaders: '../fake-data/blob/hipster.txt',
  responseBody: '../fake-data/blob/hipster.txt',
  responseTime: dayjs('2024-10-16T10:43'),
  correlationId: 'abolir',
  queryParam: 'jusque',
};

export const sampleWithNewData: NewPartnerCall = {
  partner: 'WAFR',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
