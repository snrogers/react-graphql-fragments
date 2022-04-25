import * as Types from "../../../../generated/graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type OrderItemSummaryFragment = {
  __typename?: "OrderItem";
  id: string;
  name: string;
  amount: number;
  cost: number;
};

export type OrderItemSummaryQueryVariables = Types.Exact<{
  orderItemId: Types.Scalars["ID"];
}>;

export type OrderItemSummaryQuery = {
  __typename?: "Query";
  orderItemById?:
    | {
        __typename?: "OrderItem";
        id: string;
        name: string;
        amount: number;
        cost: number;
      }
    | null
    | undefined;
};

export const OrderItemSummaryFragmentDoc = gql`
  fragment OrderItemSummaryFragment on OrderItem {
    id
    name
    amount
    cost
  }
`;
export const OrderItemSummaryQueryDocument = gql`
  query OrderItemSummaryQuery($orderItemId: ID!) {
    orderItemById(id: $orderItemId) {
      ...OrderItemSummaryFragment
    }
  }
  ${OrderItemSummaryFragmentDoc}
`;

/**
 * __useOrderItemSummaryQuery__
 *
 * To run a query within a React component, call `useOrderItemSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderItemSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderItemSummaryQuery({
 *   variables: {
 *      orderItemId: // value for 'orderItemId'
 *   },
 * });
 */
export function useOrderItemSummaryQuery(
  baseOptions: Apollo.QueryHookOptions<
    OrderItemSummaryQuery,
    OrderItemSummaryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OrderItemSummaryQuery, OrderItemSummaryQueryVariables>(
    OrderItemSummaryQueryDocument,
    options
  );
}
export function useOrderItemSummaryQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    OrderItemSummaryQuery,
    OrderItemSummaryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    OrderItemSummaryQuery,
    OrderItemSummaryQueryVariables
  >(OrderItemSummaryQueryDocument, options);
}
export type OrderItemSummaryQueryHookResult = ReturnType<
  typeof useOrderItemSummaryQuery
>;
export type OrderItemSummaryQueryLazyQueryHookResult = ReturnType<
  typeof useOrderItemSummaryQueryLazyQuery
>;
export type OrderItemSummaryQueryQueryResult = Apollo.QueryResult<
  OrderItemSummaryQuery,
  OrderItemSummaryQueryVariables
>;
