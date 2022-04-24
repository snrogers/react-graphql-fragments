import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type OrdersListItemOrderFragment = { __typename?: 'Order', id: string, createdAt: number, table: { __typename?: 'Table', id: string } };

export type OrdersListItemQueryVariables = Types.Exact<{
  orderId: Types.Scalars['ID'];
}>;


export type OrdersListItemQuery = { __typename?: 'Query', orderById?: { __typename?: 'Order', id: string, createdAt: number, table: { __typename?: 'Table', id: string } } | null | undefined };

export const OrdersListItemOrderFragmentDoc = gql`
    fragment OrdersListItemOrder on Order {
  id
  createdAt
  table {
    id
  }
}
    `;
export const OrdersListItemQueryDocument = gql`
    query OrdersListItemQuery($orderId: ID!) {
  orderById(id: $orderId) {
    ...OrdersListItemOrder
  }
}
    ${OrdersListItemOrderFragmentDoc}`;

/**
 * __useOrdersListItemQuery__
 *
 * To run a query within a React component, call `useOrdersListItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersListItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersListItemQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useOrdersListItemQuery(baseOptions: Apollo.QueryHookOptions<OrdersListItemQuery, OrdersListItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersListItemQuery, OrdersListItemQueryVariables>(OrdersListItemQueryDocument, options);
      }
export function useOrdersListItemQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersListItemQuery, OrdersListItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersListItemQuery, OrdersListItemQueryVariables>(OrdersListItemQueryDocument, options);
        }
export type OrdersListItemQueryHookResult = ReturnType<typeof useOrdersListItemQuery>;
export type OrdersListItemQueryLazyQueryHookResult = ReturnType<typeof useOrdersListItemQueryLazyQuery>;
export type OrdersListItemQueryQueryResult = Apollo.QueryResult<OrdersListItemQuery, OrdersListItemQueryVariables>;