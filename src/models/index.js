// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED",
  "RESTAURANT_DECLINED": "RESTAURANT_DECLINED"
};

const PlanSubscription = {
  "BASIC": "BASIC",
  "PREMIUM": "PREMIUM",
  "SUPER": "SUPER"
};

const { Order, OrderDish, Dish, Restaurant, RestaurantOwner, UserMobile } = initSchema(schema);

export {
  Order,
  OrderDish,
  Dish,
  Restaurant,
  RestaurantOwner,
  UserMobile,
  OrderStatus,
  PlanSubscription
};