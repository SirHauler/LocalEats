// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Review, VendorInfo, BusinessHoursJSON, HoursJSON, AddressJSON } = initSchema(schema);

export {
  Review,
  VendorInfo,
  BusinessHoursJSON,
  HoursJSON,
  AddressJSON
};