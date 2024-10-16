import dayjs from 'dayjs/esm';

import { IImage, NewImage } from './image.model';

export const sampleWithRequiredData: IImage = {
  id: 3102,
  uuid: 'ba16a96a-4bde-4c64-8ce5-ad7f28ff127b',
};

export const sampleWithPartialData: IImage = {
  id: 3428,
  uuid: 'ef87c988-b9ab-4685-b2a1-dc511ac65a5a',
  name: 'à seule fin de équipe de recherche contredire',
  walletHolder: '90df4ead-e1ac-4496-86e1-b0b3b2cca19d',
  lastModifiedBy: 'fonctionner marquer ronron',
};

export const sampleWithFullData: IImage = {
  id: 15848,
  uuid: 'b8c1a885-e9e7-4ff4-85db-0a16ee8bc705',
  name: 'antagoniste',
  file: '../fake-data/blob/hipster.png',
  fileContentType: 'unknown',
  walletHolder: '0056eb8b-18f9-4467-b89f-570a3832f700',
  createdBy: 'orange par rapport à',
  createdDate: dayjs('2024-10-16T01:09'),
  lastModifiedBy: 'camarade',
  lastModifiedDate: dayjs('2024-10-15T21:01'),
};

export const sampleWithNewData: NewImage = {
  uuid: 'e6a85c3b-b7d2-4af3-9515-92934ebef3a8',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
