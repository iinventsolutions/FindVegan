// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PlanSubscription = {
  "FREE": "FREE",
  "BASIC": "BASIC",
  "PREMIUM": "PREMIUM"
};

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED",
  "RESTAURANT_DECLINED": "RESTAURANT_DECLINED"
};

const { OrderDish, Dish, UserMobile, Order, Restaurant, RestaurantOwner } = initSchema(schema);

export {
  OrderDish,
  Dish,
  UserMobile,
  Order,
  Restaurant,
  RestaurantOwner,
  PlanSubscription,
  OrderStatus
};