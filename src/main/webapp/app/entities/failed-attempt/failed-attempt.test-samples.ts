import dayjs from 'dayjs/esm';

import { IFailedAttempt, NewFailedAttempt } from './failed-attempt.model';

export const sampleWithRequiredData: IFailedAttempt = {
  id: 8863,
};

export const sampleWithPartialData: IFailedAttempt = {
  id: 6325,
  login: 'triangulaire partenaire',
  ipAddress: 'économiser présidence autour de',
  isAfterLock: false,
  app: 'MERCHANT',
  device: 'a04a38fa-d4fd-4a89-b65f-2c2ae8eae6d6',
  createdDate: dayjs('2024-10-15T15:34'),
  reason: 'concurrence exprès vlan',
};

export const sampleWithFullData: IFailedAttempt = {
  id: 14031,
  login: 'à partir de garder',
  ipAddress: 'puis former',
  isAfterLock: true,
  app: 'MOBILE',
  action: 'EMAIL_CHECK',
  device: 'be251e75-db63-4342-a978-880aa1efcf08',
  createdDate: dayjs('2024-10-15T21:15'),
  reason: 'pendant que autrefois',
};

export const sampleWithNewData: NewFailedAttempt = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
