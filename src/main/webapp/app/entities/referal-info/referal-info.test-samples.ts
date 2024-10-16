import dayjs from 'dayjs/esm';

import { IReferalInfo, NewReferalInfo } from './referal-info.model';

export const sampleWithRequiredData: IReferalInfo = {
  id: 25417,
  uuid: 'd59f001f-bebd-48f4-bd58-c974faf89dee',
};

export const sampleWithPartialData: IReferalInfo = {
  id: 31490,
  uuid: 'c6e7c0d6-efb1-4a46-a033-911fb00e4027',
  referalCode: 'incognito ouah',
  status: 'PAID',
  createdBy: 'sur commissionnaire complètement',
  createdDate: dayjs('2024-10-15T16:15'),
  lastModifiedBy: 'instituer en face de',
  lastModifiedDate: dayjs('2024-10-15T19:23'),
};

export const sampleWithFullData: IReferalInfo = {
  id: 1512,
  uuid: 'cc21fba8-cccb-4445-a947-50c7bee502fa',
  referalCode: 'amorphe biathlète',
  walletHolder: 'c91f5c2a-ac51-4c50-b237-61d7e527911a',
  refered: 'e996cad3-083c-4c1a-8c2f-388d1ffcbaa4',
  status: 'PENDING',
  createdBy: 'patientèle autour de hôte',
  createdDate: dayjs('2024-10-16T01:37'),
  lastModifiedBy: 'équipe lors de',
  lastModifiedDate: dayjs('2024-10-16T10:17'),
};

export const sampleWithNewData: NewReferalInfo = {
  uuid: '3f7bc0e0-d066-40f4-8cd9-1db9bf18065b',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
