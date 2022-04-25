import * as Types from "../../generated/graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type OrdersListQueryVariables = Types.Exact<{ [key: string]: never }>;

export type OrdersListQuery = {
  __typename?: "Query";
  orders: Array<{ __typename?: "Order"; id: string }>;
};

export const OrdersListQueryDocument = gql`
  query OrdersListQuery {
    orders {
      id
    }
  }
`;

/**
 * __useOrdersListQuery__
 *
 * To run a query within a React component, call `useOrdersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersListQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdersListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    OrdersListQuery,
    OrdersListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OrdersListQuery, OrdersListQueryVariables>(
    OrdersListQueryDocument,
    options
  );
}
export function useOrdersListQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    OrdersListQuery,
    OrdersListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OrdersListQuery, OrdersListQueryVariables>(
    OrdersListQueryDocument,
    options
  );
}
export type OrdersListQueryHookResult = ReturnType<typeof useOrdersListQuery>;
export type OrdersListQueryLazyQueryHookResult = ReturnType<
  typeof useOrdersListQueryLazyQuery
>;
export type OrdersListQueryQueryResult = Apollo.QueryResult<
  OrdersListQuery,
  OrdersListQueryVariables
>;
