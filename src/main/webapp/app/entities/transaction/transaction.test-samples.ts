import dayjs from 'dayjs/esm';

import { ITransaction, NewTransaction } from './transaction.model';

export const sampleWithRequiredData: ITransaction = {
  id: 21957,
  uuid: '59592f95-879b-4083-b38b-aa9a9a41d3ce',
};

export const sampleWithPartialData: ITransaction = {
  id: 18370,
  uuid: 'ec34c7d6-de07-4ad5-a32a-68ab4fa8a324',
  type: 'COMMISSION',
  status: 'IN_PROGRESS',
  amount: 20585.57,
  currency: 'déc',
  endTime: dayjs('2024-10-16T07:48'),
  parent: '497c76bd-c21b-42de-bb5e-363f992cf719',
  reference: 'de façon que tant que',
  partnerToken: 'dans la mesure où',
  createdBy: 'personnel professionnel clientèle',
  lastModifiedBy: 'areu areu avant de vraiment',
  lastModifiedDate: dayjs('2024-10-15T20:05'),
};

export const sampleWithFullData: ITransaction = {
  id: 10679,
  uuid: 'cc6335cb-3e57-40f5-94b6-4c20ede73f90',
  type: 'TRANSFER_OUT',
  status: 'REJECTED',
  direction: 'CREDIT',
  amount: 25672.09,
  description: 'aigre aimable pourvu que',
  fee: 22473.86,
  commission: 21691.63,
  currency: 'dyn',
  counterpartyType: 'BENEFICIARY',
  counterpartyId: 'pff jeune enfant',
  entryDate: dayjs('2024-10-16'),
  effectiveDate: dayjs('2024-10-15'),
  startTime: dayjs('2024-10-16T03:04'),
  endTime: dayjs('2024-10-15T17:10'),
  parent: '9e183754-ea50-44c9-b505-317e513e3cba',
  reference: 'ci',
  externalId: 'mêler pis',
  partnerToken: "population du Québec sédentaire à l'égard de",
  wallet: '21c4938c-b9df-49f8-8add-4c0173434b7d',
  createdBy: 'vlan blême',
  createdDate: dayjs('2024-10-15T22:17'),
  lastModifiedBy: 'plic',
  lastModifiedDate: dayjs('2024-10-16T06:35'),
};

export const sampleWithNewData: NewTransaction = {
  uuid: '1234a127-47dc-49fb-b7e4-8b0df77c0a15',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
