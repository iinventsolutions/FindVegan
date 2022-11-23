// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Restaurant, Dish } = initSchema(schema);

export {
  Restaurant,
  Dish
};