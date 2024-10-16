import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 9456,
  uuid: 'c8e69f08-02ab-4341-8e13-a3e6a589b32d',
  title: 'même si sans que',
  description: 'bientôt sédentaire',
  status: 'Inactive',
  price: 28814.07,
};

export const sampleWithPartialData: IProduct = {
  id: 21976,
  uuid: '8aad2da1-e914-4c14-9c7c-d6bd71f0cfd5',
  title: 'brave sans',
  description: 'que patientèle',
  status: 'Active',
  price: 16753.71,
  compareAtPrice: 11280.85,
  profit: 15494.94,
  margin: 13085.67,
  inventoryQuantity: 25594,
};

export const sampleWithFullData: IProduct = {
  id: 30955,
  uuid: '6184fa7e-6931-45e2-9896-c84aa91ca1e4',
  walletHolder: 'aaafb05f-351b-4726-a2af-70d99aee9225',
  title: 'par rapport à mal à même',
  description: 'fier',
  status: 'Inactive',
  media: '../fake-data/blob/hipster.png',
  mediaContentType: 'unknown',
  price: 23309.43,
  compareAtPrice: 20609.37,
  costPerItem: 32140.05,
  profit: 14719.57,
  margin: 9704.03,
  inventoryQuantity: 2865,
  inventoryLocation: 'aussitôt que impromptu',
  trackQuantity: false,
};

export const sampleWithNewData: NewProduct = {
  uuid: '2ad11279-d097-4735-92d6-c596bfcb0478',
  title: 'aussitôt dès que',
  description: 'essuyer communauté étudiante',
  status: 'Inactive',
  price: 13220.39,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
