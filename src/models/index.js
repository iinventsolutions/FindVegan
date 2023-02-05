// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SubscriptionStatus = {
  "BASIC": "BASIC",
  "PREMIUM": "PREMIUM",
  "SUPER": "SUPER"
};

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { RestaurantOwner, User, Order, Restaurant, Dish, OrderDish } = initSchema(schema);

export {
  RestaurantOwner,
  User,
  Order,
  Restaurant,
  Dish,
  OrderDish,
  SubscriptionStatus,
  OrderStatus
};