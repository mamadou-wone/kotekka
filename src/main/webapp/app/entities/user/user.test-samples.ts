import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 24618,
  login: '_@wX2e',
};

export const sampleWithPartialData: IUser = {
  id: 10028,
  login: '@',
};

export const sampleWithFullData: IUser = {
  id: 12761,
  login: '^UWV@h0P',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
