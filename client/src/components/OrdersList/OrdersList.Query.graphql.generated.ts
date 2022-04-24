import * as Types from '../../src/generated/graphql';

import { gql } from '@apollo/client';
import { TableSummaryFragmentDoc } from '../TableSummaryFragment.graphql.generated';
export type IOrdersListOrderFragment = { __typename?: 'Order', id: string, createdAt: number, table: { __typename?: 'Table', id: string, name: string, persons: Array<{ __typename?: 'Person', id: string, name: string, age: number, orderItems: Array<{ __typename?: 'OrderItem', id: string, name: string, amount: number, cost: number }> }> } };

export const OrdersListOrderFragmentDoc = gql`
    fragment OrdersListOrderFragment on Order {
  id
  createdAt
  table {
    ...TableSummaryFragment
  }
}
    ${TableSummaryFragmentDoc}`;