import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum PlanSubscription {
  FREE = "FREE",
  BASIC = "BASIC",
  PREMIUM = "PREMIUM"
}

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  ACCEPTED = "ACCEPTED",
  RESTAURANT_DECLINED = "RESTAURANT_DECLINED"
}

type OrderDishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMobileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantOwnerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerOrderDish = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly orderID: string;
  readonly Dish?: Dish | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishDishId?: string | null;
}

type LazyOrderDish = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly orderID: string;
  readonly Dish: AsyncItem<Dish | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishDishId?: string | null;
}

export declare type OrderDish = LazyLoading extends LazyLoadingDisabled ? EagerOrderDish : LazyOrderDish

export declare const OrderDish: (new (init: ModelInit<OrderDish, OrderDishMetaData>) => OrderDish) & {
  copyOf(source: OrderDish, mutator: (draft: MutableModel<OrderDish, OrderDishMetaData>) => MutableModel<OrderDish, OrderDishMetaData> | void): OrderDish;
}

type EagerDish = {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly restaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDish = {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly restaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dish = LazyLoading extends LazyLoadingDisabled ? EagerDish : LazyDish

export declare const Dish: (new (init: ModelInit<Dish, DishMetaData>) => Dish) & {
  copyOf(source: Dish, mutator: (draft: MutableModel<Dish, DishMetaData>) => MutableModel<Dish, DishMetaData> | void): Dish;
}

type EagerUserMobile = {
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly sub?: string | null;
  readonly phone?: string | null;
  readonly Orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserMobile = {
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly sub?: string | null;
  readonly phone?: string | null;
  readonly Orders: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserMobile = LazyLoading extends LazyLoadingDisabled ? EagerUserMobile : LazyUserMobile

export declare const UserMobile: (new (init: ModelInit<UserMobile, UserMobileMetaData>) => UserMobile) & {
  copyOf(source: UserMobile, mutator: (draft: MutableModel<UserMobile, UserMobileMetaData>) => MutableModel<UserMobile, UserMobileMetaData> | void): UserMobile;
}

type EagerOrder = {
  readonly id: string;
  readonly status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly subtotal?: number | null;
  readonly OrderDish?: (OrderDish | null)[] | null;
  readonly Restaurant?: Restaurant | null;
  readonly usermobileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderRestaurantId?: string | null;
}

type LazyOrder = {
  readonly id: string;
  readonly status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly subtotal?: number | null;
  readonly OrderDish: AsyncCollection<OrderDish>;
  readonly Restaurant: AsyncItem<Restaurant | undefined>;
  readonly usermobileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderRestaurantId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order, OrderMetaData>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

type EagerRestaurant = {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly deliveryFee?: number | null;
  readonly maxDelivery?: number | null;
  readonly minDelivery?: number | null;
  readonly lat: number;
  readonly lng: number;
  readonly sub?: string | null;
  readonly openingTime?: string | null;
  readonly closingTime?: string | null;
  readonly address?: string | null;
  readonly Dishes?: (Dish | null)[] | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurant = {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly deliveryFee?: number | null;
  readonly maxDelivery?: number | null;
  readonly minDelivery?: number | null;
  readonly lat: number;
  readonly lng: number;
  readonly sub?: string | null;
  readonly openingTime?: string | null;
  readonly closingTime?: string | null;
  readonly address?: string | null;
  readonly Dishes: AsyncCollection<Dish>;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurant = LazyLoading extends LazyLoadingDisabled ? EagerRestaurant : LazyRestaurant

export declare const Restaurant: (new (init: ModelInit<Restaurant, RestaurantMetaData>) => Restaurant) & {
  copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}

type EagerRestaurantOwner = {
  readonly id: string;
  readonly fullname: string;
  readonly username: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly dob?: string | null;
  readonly planstatus?: PlanSubscription | keyof typeof PlanSubscription | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurantOwner = {
  readonly id: string;
  readonly fullname: string;
  readonly username: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly dob?: string | null;
  readonly planstatus?: PlanSubscription | keyof typeof PlanSubscription | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RestaurantOwner = LazyLoading extends LazyLoadingDisabled ? EagerRestaurantOwner : LazyRestaurantOwner

export declare const RestaurantOwner: (new (init: ModelInit<RestaurantOwner, RestaurantOwnerMetaData>) => RestaurantOwner) & {
  copyOf(source: RestaurantOwner, mutator: (draft: MutableModel<RestaurantOwner, RestaurantOwnerMetaData>) => MutableModel<RestaurantOwner, RestaurantOwnerMetaData> | void): RestaurantOwner;
}