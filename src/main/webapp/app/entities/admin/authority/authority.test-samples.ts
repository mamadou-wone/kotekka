import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '3fd1a618-8190-4420-89d1-7b1b2f4a6c60',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a400ca5c-1a35-4adc-85d3-431c2c1a5fd2',
};

export const sampleWithFullData: IAuthority = {
  name: 'dcce5b7a-4e80-4300-8cda-0cec89d22a47',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
