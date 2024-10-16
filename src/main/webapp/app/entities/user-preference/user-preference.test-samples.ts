import dayjs from 'dayjs/esm';

import { IUserPreference, NewUserPreference } from './user-preference.model';

export const sampleWithRequiredData: IUserPreference = {
  id: 28042,
};

export const sampleWithPartialData: IUserPreference = {
  id: 17378,
  app: 'PORTAL',
  setting: 'outre',
  createdDate: dayjs('2024-10-16T11:25'),
};

export const sampleWithFullData: IUserPreference = {
  id: 31375,
  app: 'WEB',
  name: 'depuis détruire',
  setting: 'terne',
  createdDate: dayjs('2024-10-16T13:04'),
};

export const sampleWithNewData: NewUserPreference = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
