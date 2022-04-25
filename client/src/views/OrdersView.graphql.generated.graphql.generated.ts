import * as Types from "../generated/graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type OrdersViewQueryVariables = Types.Exact<{ [key: string]: never }>;

export type OrdersViewQuery = {
  __typename?: "Query";
  orders: Array<{ __typename?: "Order"; id: string }>;
};

export const OrdersViewQueryDocument = gql`
  query OrdersViewQuery {
    orders {
      id
    }
  }
`;

/**
 * __useOrdersViewQuery__
 *
 * To run a query within a React component, call `useOrdersViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersViewQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdersViewQuery(
  baseOptions?: Apollo.QueryHookOptions<
    OrdersViewQuery,
    OrdersViewQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OrdersViewQuery, OrdersViewQueryVariables>(
    OrdersViewQueryDocument,
    options
  );
}
export function useOrdersViewQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    OrdersViewQuery,
    OrdersViewQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OrdersViewQuery, OrdersViewQueryVariables>(
    OrdersViewQueryDocument,
    options
  );
}
export type OrdersViewQueryHookResult = ReturnType<typeof useOrdersViewQuery>;
export type OrdersViewQueryLazyQueryHookResult = ReturnType<
  typeof useOrdersViewQueryLazyQuery
>;
export type OrdersViewQueryQueryResult = Apollo.QueryResult<
  OrdersViewQuery,
  OrdersViewQueryVariables
>;
