import dayjs from 'dayjs/esm';

import { IUserAccess, NewUserAccess } from './user-access.model';

export const sampleWithRequiredData: IUserAccess = {
  id: 4798,
};

export const sampleWithPartialData: IUserAccess = {
  id: 27354,
  device: '47fdcb54-1367-4ffe-9178-f5c0ef45a516',
  createdDate: dayjs('2024-10-15T16:02'),
};

export const sampleWithFullData: IUserAccess = {
  id: 10222,
  login: 'bof',
  ipAddress: 'magnifique de peur que verser',
  device: '3521d2df-a398-4a95-adfa-6e00d24b1a73',
  createdDate: dayjs('2024-10-16T11:34'),
};

export const sampleWithNewData: NewUserAccess = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
