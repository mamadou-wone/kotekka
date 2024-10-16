import dayjs from 'dayjs/esm';

import { IFailedAttemptHistory, NewFailedAttemptHistory } from './failed-attempt-history.model';

export const sampleWithRequiredData: IFailedAttemptHistory = {
  id: 28670,
};

export const sampleWithPartialData: IFailedAttemptHistory = {
  id: 15914,
  login: 'dorénavant',
  ipAddress: 'aïe',
  action: 'EMAIL_CHECK',
  device: '027daf8c-0932-4829-b31a-371679326273',
  reason: 'du moment que coin-coin',
};

export const sampleWithFullData: IFailedAttemptHistory = {
  id: 22477,
  login: 'après membre titulaire',
  ipAddress: 'triste',
  isAfterLock: false,
  app: 'WEB',
  action: 'TRANSACTION',
  device: 'd38afb4a-c56c-4f4b-b590-7b96d705b1c1',
  createdDate: dayjs('2024-10-15T17:54'),
  reason: 'membre de l’équipe de crainte que',
};

export const sampleWithNewData: NewFailedAttemptHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
