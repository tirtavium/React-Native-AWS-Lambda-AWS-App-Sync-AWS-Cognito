// @flow
// this is an auto generated file. This will be overwritten

export const createComponent = /* GraphQL */ `
  mutation CreateComponent($input: CreateComponentInput!) {
    createComponent(input: $input) {
      color
      data
      id
      viewType
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $condition: ModelJobConditionInput
    $input: CreateJobInput!
  ) {
    createJob(condition: $condition, input: $input) {
      description
      id
      owner
      position
      rate
    }
  }
`;
export const createRootComponent = /* GraphQL */ `
  mutation CreateRootComponent($input: CreateRootComponentInput!) {
    createRootComponent(input: $input) {
      color
      components {
        color
        data
        id
        viewType
      }
      id
      viewType
    }
  }
`;
export const deleteComponent = /* GraphQL */ `
  mutation DeleteComponent($input: DeleteComponentInput!) {
    deleteComponent(input: $input) {
      color
      data
      id
      viewType
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $condition: ModelJobConditionInput
    $input: DeleteJobInput!
  ) {
    deleteJob(condition: $condition, input: $input) {
      description
      id
      owner
      position
      rate
    }
  }
`;
export const deleteRootComponent = /* GraphQL */ `
  mutation DeleteRootComponent($input: DeleteRootComponentInput!) {
    deleteRootComponent(input: $input) {
      color
      components {
        color
        data
        id
        viewType
      }
      id
      viewType
    }
  }
`;
export const updateComponent = /* GraphQL */ `
  mutation UpdateComponent($input: UpdateComponentInput!) {
    updateComponent(input: $input) {
      color
      data
      id
      viewType
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $condition: ModelJobConditionInput
    $input: UpdateJobInput!
  ) {
    updateJob(condition: $condition, input: $input) {
      description
      id
      owner
      position
      rate
    }
  }
`;
export const updateRootComponent = /* GraphQL */ `
  mutation UpdateRootComponent($input: UpdateRootComponentInput!) {
    updateRootComponent(input: $input) {
      color
      components {
        color
        data
        id
        viewType
      }
      id
      viewType
    }
  }
`;
