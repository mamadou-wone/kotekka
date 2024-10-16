import dayjs from 'dayjs/esm';

import { IFeatureFlag, NewFeatureFlag } from './feature-flag.model';

export const sampleWithRequiredData: IFeatureFlag = {
  id: 4352,
};

export const sampleWithPartialData: IFeatureFlag = {
  id: 29591,
  name: 'antagoniste',
  enabled: false,
  description: 'vanter lorsque',
  createdBy: 'subito à même vers',
  updatedDate: dayjs('2024-10-16T01:48'),
};

export const sampleWithFullData: IFeatureFlag = {
  id: 2564,
  name: 'vorace voler guide',
  enabled: true,
  description: 'toc-toc en plus de',
  createdBy: 'commissionnaire sans que oh',
  createdDate: dayjs('2024-10-16T05:59'),
  updatedBy: 'sage soulager',
  updatedDate: dayjs('2024-10-15T23:58'),
};

export const sampleWithNewData: NewFeatureFlag = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
