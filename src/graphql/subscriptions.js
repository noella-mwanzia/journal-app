/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJournal = /* GraphQL */ `
  subscription OnCreateJournal(
    $filter: ModelSubscriptionJournalFilterInput
    $owner: String
  ) {
    onCreateJournal(filter: $filter, owner: $owner) {
      id
      date
      entry
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateJournal = /* GraphQL */ `
  subscription OnUpdateJournal(
    $filter: ModelSubscriptionJournalFilterInput
    $owner: String
  ) {
    onUpdateJournal(filter: $filter, owner: $owner) {
      id
      date
      entry
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteJournal = /* GraphQL */ `
  subscription OnDeleteJournal(
    $filter: ModelSubscriptionJournalFilterInput
    $owner: String
  ) {
    onDeleteJournal(filter: $filter, owner: $owner) {
      id
      date
      entry
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
