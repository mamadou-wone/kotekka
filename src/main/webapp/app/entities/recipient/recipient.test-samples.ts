import dayjs from 'dayjs/esm';

import { IRecipient, NewRecipient } from './recipient.model';

export const sampleWithRequiredData: IRecipient = {
  id: 21269,
  uuid: '867fa699-8f4f-46d5-8389-03cf349ad74f',
};

export const sampleWithPartialData: IRecipient = {
  id: 23883,
  uuid: '05badc21-e777-4bbd-9c39-95f9b08625c5',
  status: 'ACTIVE',
  firstName: 'Armelle',
  lastName: 'Benoit',
  phoneNumber: 'amorphe',
  walletHolder: 'ea96ca9e-2df0-48b4-991a-3b439e444ed1',
  createdBy: 'malade',
  lastModifiedBy: 'dès que',
};

export const sampleWithFullData: IRecipient = {
  id: 21562,
  uuid: '3a310af2-346d-49d2-ad06-1257f8fff6eb',
  status: 'ACTIVE',
  firstName: 'Mégane',
  lastName: 'Prevost',
  phoneNumber: 'épargner grâc',
  walletHolder: '3307ce2a-27fc-4f1c-8717-3fed1e0665dc',
  createdBy: 'souple au moyen de pourvu que',
  createdDate: dayjs('2024-10-15T18:02'),
  lastModifiedBy: 'tâter',
  lastModifiedDate: dayjs('2024-10-16T06:47'),
};

export const sampleWithNewData: NewRecipient = {
  uuid: '9a302d7d-45d6-4184-a883-cd3cca4dcfda',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
