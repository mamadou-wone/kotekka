import dayjs from 'dayjs/esm';

import { IOneTimePassword, NewOneTimePassword } from './one-time-password.model';

export const sampleWithRequiredData: IOneTimePassword = {
  id: 2727,
  uuid: 'a51468c2-02b9-47b4-9ed6-0f0bd700df51',
};

export const sampleWithPartialData: IOneTimePassword = {
  id: 12906,
  uuid: 'f2341c86-6fba-4c4b-9f92-fa678ba23efc',
  code: 'solitaire in',
  status: 'PENDING',
  createdDate: dayjs('2024-10-15T15:05'),
};

export const sampleWithFullData: IOneTimePassword = {
  id: 23701,
  uuid: 'd25faf24-bc06-41ea-961e-ed4ca0432da3',
  user: 'trop peu',
  code: 'raide comme',
  status: 'REJECTED',
  expiry: dayjs('2024-10-15T13:57'),
  createdDate: dayjs('2024-10-16T12:27'),
};

export const sampleWithNewData: NewOneTimePassword = {
  uuid: 'c9662250-1f44-4b03-9cbe-532e34eb15c1',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
