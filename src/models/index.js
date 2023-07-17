// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { VendorInfo, BusinessHoursJSON, HoursJSON, AddressJSON } = initSchema(schema);

export {
  VendorInfo,
  BusinessHoursJSON,
  HoursJSON,
  AddressJSON
};