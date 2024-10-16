import dayjs from 'dayjs/esm';

import { IBeneficiary, NewBeneficiary } from './beneficiary.model';

export const sampleWithRequiredData: IBeneficiary = {
  id: 10929,
  uuid: 'eac70757-70ae-4444-9ebc-d8c9cb719479',
};

export const sampleWithPartialData: IBeneficiary = {
  id: 11341,
  uuid: '2ead6c6e-53a1-4f17-99c6-0913930fafa2',
  status: 'DELETED',
  firstName: 'Anaël',
  cin: 'pourvu que v',
  phoneNumber: 'dresser préci',
  walletHolder: '4bbfe51e-17fb-49ff-8550-119e950a307a',
  lastModifiedDate: dayjs('2024-10-15T20:44'),
};

export const sampleWithFullData: IBeneficiary = {
  id: 2799,
  uuid: '624f69f3-986d-4473-bcbd-5e354c82cb56',
  status: 'ACTIVE',
  firstName: 'Olivier',
  lastName: 'Gerard',
  cin: 'derrière',
  iban: 'DK5600280820622891',
  phoneNumber: 'sitôt bang si',
  email: 'Justine.Morin@hotmail.fr',
  walletHolder: '793e8864-336a-45cf-ac46-dca5fb628cc4',
  createdBy: 'multiple aussitôt que brave',
  createdDate: dayjs('2024-10-16T04:48'),
  lastModifiedBy: 'prolonger promener',
  lastModifiedDate: dayjs('2024-10-15T14:45'),
};

export const sampleWithNewData: NewBeneficiary = {
  uuid: '0de8e5b3-1a46-4fb8-a327-3bcb376ae513',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
