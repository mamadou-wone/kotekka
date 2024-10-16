import dayjs from 'dayjs/esm';

import { IUserAffiliation, NewUserAffiliation } from './user-affiliation.model';

export const sampleWithRequiredData: IUserAffiliation = {
  id: 29191,
  walletHolder: 'ae836924-3ccc-474c-b092-3200abcf8aa6',
  affiliation: "à l'exception de",
};

export const sampleWithPartialData: IUserAffiliation = {
  id: 2155,
  walletHolder: '81e51f59-8e50-4070-8735-78c46c48ace6',
  affiliation: 'adorable briller',
  createdBy: 'hormis',
  createdDate: dayjs('2024-10-16T00:23'),
};

export const sampleWithFullData: IUserAffiliation = {
  id: 17024,
  walletHolder: 'd358e850-57d3-4254-a2f7-49f5f8a6227a',
  affiliation: 'mairie',
  createdBy: 'coac coac assez moderne',
  createdDate: dayjs('2024-10-16T09:29'),
};

export const sampleWithNewData: NewUserAffiliation = {
  walletHolder: 'ca7b87d7-4d1a-4dc4-a549-fd6985a66909',
  affiliation: 'absorber dessous',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
