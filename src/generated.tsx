import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ticket = {
  __typename?: 'Ticket';
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Int'];
  description: Scalars['String'];
};

export type TicketInput = {
  __typename?: 'TicketInput';
  name: Scalars['String'];
  price: Scalars['Int'];
  description: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  tickets: Array<Maybe<Ticket>>;
  ticketById?: Maybe<Ticket>;
};


export type QueryTicketByIdArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTicket?: Maybe<Array<Maybe<Ticket>>>;
  updateTicket?: Maybe<Ticket>;
  removeTicket?: Maybe<Array<Maybe<Ticket>>>;
};


export type MutationCreateTicketArgs = {
  name: Scalars['String'];
  price: Scalars['Int'];
  description: Scalars['String'];
};


export type MutationUpdateTicketArgs = {
  name: Scalars['String'];
  price: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationRemoveTicketArgs = {
  id: Scalars['ID'];
};

export type TicketsQueryVariables = Exact<{ [key: string]: never; }>;


export type TicketsQuery = (
  { __typename?: 'Query' }
  & { tickets: Array<Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'name' | 'price' | 'description'>
  )>> }
);

export type TicketByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TicketByIdQuery = (
  { __typename?: 'Query' }
  & { ticketById?: Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'name' | 'description' | 'price'>
  )> }
);

export type CreateTicketMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
}>;


export type CreateTicketMutation = (
  { __typename?: 'Mutation' }
  & { createTicket?: Maybe<Array<Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id'>
  )>>> }
);

export type UpdateTicketMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  id: Scalars['ID'];
}>;


export type UpdateTicketMutation = (
  { __typename?: 'Mutation' }
  & { updateTicket?: Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'name' | 'price' | 'description'>
  )> }
);

export type RemoveTicketMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveTicketMutation = (
  { __typename?: 'Mutation' }
  & { removeTicket?: Maybe<Array<Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'name' | 'price' | 'description'>
  )>>> }
);


export const TicketsDocument = gql`
    query Tickets {
  tickets {
    id
    name
    price
    description
  }
}
    `;

/**
 * __useTicketsQuery__
 *
 * To run a query within a React component, call `useTicketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTicketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTicketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTicketsQuery(baseOptions?: Apollo.QueryHookOptions<TicketsQuery, TicketsQueryVariables>) {
        return Apollo.useQuery<TicketsQuery, TicketsQueryVariables>(TicketsDocument, baseOptions);
      }
export function useTicketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TicketsQuery, TicketsQueryVariables>) {
          return Apollo.useLazyQuery<TicketsQuery, TicketsQueryVariables>(TicketsDocument, baseOptions);
        }
export type TicketsQueryHookResult = ReturnType<typeof useTicketsQuery>;
export type TicketsLazyQueryHookResult = ReturnType<typeof useTicketsLazyQuery>;
export type TicketsQueryResult = Apollo.QueryResult<TicketsQuery, TicketsQueryVariables>;
export const TicketByIdDocument = gql`
    query TicketById($id: ID!) {
  ticketById(id: $id) {
    id
    name
    description
    price
  }
}
    `;

/**
 * __useTicketByIdQuery__
 *
 * To run a query within a React component, call `useTicketByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTicketByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTicketByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTicketByIdQuery(baseOptions: Apollo.QueryHookOptions<TicketByIdQuery, TicketByIdQueryVariables>) {
        return Apollo.useQuery<TicketByIdQuery, TicketByIdQueryVariables>(TicketByIdDocument, baseOptions);
      }
export function useTicketByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TicketByIdQuery, TicketByIdQueryVariables>) {
          return Apollo.useLazyQuery<TicketByIdQuery, TicketByIdQueryVariables>(TicketByIdDocument, baseOptions);
        }
export type TicketByIdQueryHookResult = ReturnType<typeof useTicketByIdQuery>;
export type TicketByIdLazyQueryHookResult = ReturnType<typeof useTicketByIdLazyQuery>;
export type TicketByIdQueryResult = Apollo.QueryResult<TicketByIdQuery, TicketByIdQueryVariables>;
export const CreateTicketDocument = gql`
    mutation CreateTicket($name: String!, $description: String!, $price: Int!) {
  createTicket(name: $name, description: $description, price: $price) {
    id
  }
}
    `;
export type CreateTicketMutationFn = Apollo.MutationFunction<CreateTicketMutation, CreateTicketMutationVariables>;

/**
 * __useCreateTicketMutation__
 *
 * To run a mutation, you first call `useCreateTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTicketMutation, { data, loading, error }] = useCreateTicketMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useCreateTicketMutation(baseOptions?: Apollo.MutationHookOptions<CreateTicketMutation, CreateTicketMutationVariables>) {
        return Apollo.useMutation<CreateTicketMutation, CreateTicketMutationVariables>(CreateTicketDocument, baseOptions);
      }
export type CreateTicketMutationHookResult = ReturnType<typeof useCreateTicketMutation>;
export type CreateTicketMutationResult = Apollo.MutationResult<CreateTicketMutation>;
export type CreateTicketMutationOptions = Apollo.BaseMutationOptions<CreateTicketMutation, CreateTicketMutationVariables>;
export const UpdateTicketDocument = gql`
    mutation UpdateTicket($name: String!, $description: String!, $price: Int!, $id: ID!) {
  updateTicket(name: $name, description: $description, price: $price, id: $id) {
    id
    name
    price
    description
  }
}
    `;
export type UpdateTicketMutationFn = Apollo.MutationFunction<UpdateTicketMutation, UpdateTicketMutationVariables>;

/**
 * __useUpdateTicketMutation__
 *
 * To run a mutation, you first call `useUpdateTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTicketMutation, { data, loading, error }] = useUpdateTicketMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateTicketMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTicketMutation, UpdateTicketMutationVariables>) {
        return Apollo.useMutation<UpdateTicketMutation, UpdateTicketMutationVariables>(UpdateTicketDocument, baseOptions);
      }
export type UpdateTicketMutationHookResult = ReturnType<typeof useUpdateTicketMutation>;
export type UpdateTicketMutationResult = Apollo.MutationResult<UpdateTicketMutation>;
export type UpdateTicketMutationOptions = Apollo.BaseMutationOptions<UpdateTicketMutation, UpdateTicketMutationVariables>;
export const RemoveTicketDocument = gql`
    mutation RemoveTicket($id: ID!) {
  removeTicket(id: $id) {
    id
    name
    price
    description
  }
}
    `;
export type RemoveTicketMutationFn = Apollo.MutationFunction<RemoveTicketMutation, RemoveTicketMutationVariables>;

/**
 * __useRemoveTicketMutation__
 *
 * To run a mutation, you first call `useRemoveTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTicketMutation, { data, loading, error }] = useRemoveTicketMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTicketMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTicketMutation, RemoveTicketMutationVariables>) {
        return Apollo.useMutation<RemoveTicketMutation, RemoveTicketMutationVariables>(RemoveTicketDocument, baseOptions);
      }
export type RemoveTicketMutationHookResult = ReturnType<typeof useRemoveTicketMutation>;
export type RemoveTicketMutationResult = Apollo.MutationResult<RemoveTicketMutation>;
export type RemoveTicketMutationOptions = Apollo.BaseMutationOptions<RemoveTicketMutation, RemoveTicketMutationVariables>;