import { ICollection, NewCollection } from './collection.model';

export const sampleWithRequiredData: ICollection = {
  id: 23907,
  name: 'antique',
};

export const sampleWithPartialData: ICollection = {
  id: 31061,
  name: 'habile ding',
};

export const sampleWithFullData: ICollection = {
  id: 3813,
  name: 'capter défier actionnaire',
};

export const sampleWithNewData: NewCollection = {
  name: 'en dedans de zzzz tchou tchouu',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
