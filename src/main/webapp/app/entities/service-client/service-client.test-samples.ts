import dayjs from 'dayjs/esm';

import { IServiceClient, NewServiceClient } from './service-client.model';

export const sampleWithRequiredData: IServiceClient = {
  id: 11962,
};

export const sampleWithPartialData: IServiceClient = {
  id: 20517,
  createdDate: dayjs('2024-10-16T08:07'),
  lastModifiedDate: dayjs('2024-10-16T02:36'),
};

export const sampleWithFullData: IServiceClient = {
  id: 5733,
  clientId: '7f42cf2a-147b-4cbc-8802-cbaad178c469',
  type: 'CUSTOMER',
  apiKey: 'dc95abad-7674-4ed3-aa50-4d2c249f3fd3',
  status: 'ACTIVE',
  note: 'suggérer insuffisamment jusque',
  createdDate: dayjs('2024-10-16T07:43'),
  lastModifiedDate: dayjs('2024-10-15T13:45'),
};

export const sampleWithNewData: NewServiceClient = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
