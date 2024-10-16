import dayjs from 'dayjs/esm';

import { IOrganisation, NewOrganisation } from './organisation.model';

export const sampleWithRequiredData: IOrganisation = {
  id: 23503,
  name: 'de sorte que après',
};

export const sampleWithPartialData: IOrganisation = {
  id: 2089,
  name: 'dans la mesure où',
  type: 'CORPORATION',
  headcount: 23724,
};

export const sampleWithFullData: IOrganisation = {
  id: 26817,
  name: 'téléphoner dynamique',
  type: 'NONPROFIT',
  parent: 'pater gestionnaire',
  location: 'blablabla',
  headcount: 32645,
  createdBy: 'responsable ha ha loin',
  createdDate: dayjs('2024-10-16T12:22'),
};

export const sampleWithNewData: NewOrganisation = {
  name: 'accrocher cot cot',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
