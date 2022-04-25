import * as Types from '../../../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type KillModalDeadPersonFragment = { __typename?: 'Person', id: string, isDead: boolean };

export type KillModalKillGuestMutationVariables = Types.Exact<{
  personId: Types.Scalars['ID'];
}>;


export type KillModalKillGuestMutation = { __typename?: 'Mutation', deadGuest?: { __typename?: 'Person', id: string, isDead: boolean } | null | undefined };

export const KillModalDeadPersonFragmentDoc = gql`
    fragment KillModalDeadPerson on Person {
  id
  isDead
}
    `;
export const KillModalKillGuestMutationDocument = gql`
    mutation KillModalKillGuestMutation($personId: ID!) {
  deadGuest: killPerson(id: $personId) {
    ...KillModalDeadPerson
  }
}
    ${KillModalDeadPersonFragmentDoc}`;
export type KillModalKillGuestMutationMutationFn = Apollo.MutationFunction<KillModalKillGuestMutation, KillModalKillGuestMutationVariables>;

/**
 * __useKillModalKillGuestMutation__
 *
 * To run a mutation, you first call `useKillModalKillGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useKillModalKillGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [killModalKillGuestMutation, { data, loading, error }] = useKillModalKillGuestMutation({
 *   variables: {
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useKillModalKillGuestMutation(baseOptions?: Apollo.MutationHookOptions<KillModalKillGuestMutation, KillModalKillGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<KillModalKillGuestMutation, KillModalKillGuestMutationVariables>(KillModalKillGuestMutationDocument, options);
      }
export type KillModalKillGuestMutationHookResult = ReturnType<typeof useKillModalKillGuestMutation>;
export type KillModalKillGuestMutationMutationResult = Apollo.MutationResult<KillModalKillGuestMutation>;
export type KillModalKillGuestMutationMutationOptions = Apollo.BaseMutationOptions<KillModalKillGuestMutation, KillModalKillGuestMutationVariables>;