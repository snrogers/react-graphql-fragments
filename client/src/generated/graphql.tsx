export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  killPerson?: Maybe<Person>;
  nothing: Scalars["ID"];
};

export type MutationKillPersonArgs = {
  id: Scalars["ID"];
};

export type Order = {
  __typename?: "Order";
  createdAt: Scalars["Int"];
  id: Scalars["ID"];
  table: Table;
};

export type OrderItem = {
  __typename?: "OrderItem";
  amount: Scalars["Int"];
  cost: Scalars["Float"];
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type Person = {
  __typename?: "Person";
  age: Scalars["Float"];
  id: Scalars["ID"];
  isDead: Scalars["Boolean"];
  name: Scalars["String"];
  orderItems: Array<OrderItem>;
};

export type Query = {
  __typename?: "Query";
  orderById?: Maybe<Order>;
  orderItemById?: Maybe<OrderItem>;
  orders: Array<Order>;
  personById?: Maybe<Person>;
  tableById?: Maybe<Table>;
};

export type QueryOrderByIdArgs = {
  id: Scalars["ID"];
};

export type QueryOrderItemByIdArgs = {
  id: Scalars["ID"];
};

export type QueryPersonByIdArgs = {
  id: Scalars["ID"];
};

export type QueryTableByIdArgs = {
  id: Scalars["ID"];
};

export type Subscription = {
  __typename?: "Subscription";
  nothing: Scalars["ID"];
};

export type Table = {
  __typename?: "Table";
  id: Scalars["ID"];
  name: Scalars["String"];
  persons: Array<Person>;
};
