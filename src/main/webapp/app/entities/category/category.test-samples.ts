import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 16978,
  name: 'électorat maîtriser vis-à-vie de',
};

export const sampleWithPartialData: ICategory = {
  id: 13906,
  name: 'tracer',
};

export const sampleWithFullData: ICategory = {
  id: 16228,
  name: 'tic-tac combler',
};

export const sampleWithNewData: NewCategory = {
  name: 'pendant',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
