// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { VendorInfo } = initSchema(schema);

export {
  VendorInfo
};