import * as Types from "../../../../generated/graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type TableSummaryFragment = {
  __typename?: "Table";
  id: string;
  name: string;
  persons: Array<{ __typename?: "Person"; id: string }>;
};

export type TableSummaryQueryVariables = Types.Exact<{
  tableId: Types.Scalars["ID"];
}>;

export type TableSummaryQuery = {
  __typename?: "Query";
  tableById?:
    | {
        __typename?: "Table";
        id: string;
        name: string;
        persons: Array<{ __typename?: "Person"; id: string }>;
      }
    | null
    | undefined;
};

export const TableSummaryFragmentDoc = gql`
  fragment TableSummaryFragment on Table {
    id
    name
    persons {
      id
    }
  }
`;
export const TableSummaryQueryDocument = gql`
  query TableSummaryQuery($tableId: ID!) {
    tableById(id: $tableId) {
      ...TableSummaryFragment
    }
  }
  ${TableSummaryFragmentDoc}
`;

/**
 * __useTableSummaryQuery__
 *
 * To run a query within a React component, call `useTableSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTableSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTableSummaryQuery({
 *   variables: {
 *      tableId: // value for 'tableId'
 *   },
 * });
 */
export function useTableSummaryQuery(
  baseOptions: Apollo.QueryHookOptions<
    TableSummaryQuery,
    TableSummaryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TableSummaryQuery, TableSummaryQueryVariables>(
    TableSummaryQueryDocument,
    options
  );
}
export function useTableSummaryQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TableSummaryQuery,
    TableSummaryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TableSummaryQuery, TableSummaryQueryVariables>(
    TableSummaryQueryDocument,
    options
  );
}
export type TableSummaryQueryHookResult = ReturnType<
  typeof useTableSummaryQuery
>;
export type TableSummaryQueryLazyQueryHookResult = ReturnType<
  typeof useTableSummaryQueryLazyQuery
>;
export type TableSummaryQueryQueryResult = Apollo.QueryResult<
  TableSummaryQuery,
  TableSummaryQueryVariables
>;
