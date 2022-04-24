import * as Types from '../../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type PersonSummaryFragment = { __typename?: 'Person', id: string, name: string, age: number, orderItems: Array<{ __typename?: 'OrderItem', id: string }> };

export type PersonSummaryQueryVariables = Types.Exact<{
  personId: Types.Scalars['ID'];
}>;


export type PersonSummaryQuery = { __typename?: 'Query', personById?: { __typename?: 'Person', id: string, name: string, age: number, orderItems: Array<{ __typename?: 'OrderItem', id: string }> } | null | undefined };

export const PersonSummaryFragmentDoc = gql`
    fragment PersonSummaryFragment on Person {
  id
  name
  age
  orderItems {
    id
  }
}
    `;
export const PersonSummaryQueryDocument = gql`
    query PersonSummaryQuery($personId: ID!) {
  personById(id: $personId) {
    ...PersonSummaryFragment
  }
}
    ${PersonSummaryFragmentDoc}`;

/**
 * __usePersonSummaryQuery__
 *
 * To run a query within a React component, call `usePersonSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonSummaryQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function usePersonSummaryQuery(baseOptions: Apollo.QueryHookOptions<PersonSummaryQuery, PersonSummaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonSummaryQuery, PersonSummaryQueryVariables>(PersonSummaryQueryDocument, options);
      }
export function usePersonSummaryQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonSummaryQuery, PersonSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonSummaryQuery, PersonSummaryQueryVariables>(PersonSummaryQueryDocument, options);
        }
export type PersonSummaryQueryHookResult = ReturnType<typeof usePersonSummaryQuery>;
export type PersonSummaryQueryLazyQueryHookResult = ReturnType<typeof usePersonSummaryQueryLazyQuery>;
export type PersonSummaryQueryQueryResult = Apollo.QueryResult<PersonSummaryQuery, PersonSummaryQueryVariables>;