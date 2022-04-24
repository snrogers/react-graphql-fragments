import * as Types from '../../../../generated/graphql';

import { gql } from '@apollo/client';
export type TableSummaryFragment = { __typename?: 'Table', id: string, name: string, persons: Array<{ __typename?: 'Person', id: string }> };

export const TableSummaryFragmentDoc = gql`
    fragment TableSummaryFragment on Table {
  id
  name
  persons {
    id
  }
}
    `;