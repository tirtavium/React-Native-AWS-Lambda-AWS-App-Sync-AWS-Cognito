// @flow
// this is an auto generated file. This will be overwritten

export const onCreateComponent = /* GraphQL */ `
  subscription OnCreateComponent($data: String, $id: ID, $viewType: String) {
    onCreateComponent(data: $data, id: $id, viewType: $viewType) {
      color
      data
      id
      viewType
    }
  }
`;
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob($owner: String!) {
    onCreateJob(owner: $owner) {
      description
      id
      owner
      position
      rate
    }
  }
`;
export const onCreateRootComponent = /* GraphQL */ `
  subscription OnCreateRootComponent($id: ID, $viewType: String) {
    onCreateRootComponent(id: $id, viewType: $viewType) {
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
export const onDeleteComponent = /* GraphQL */ `
  subscription OnDeleteComponent($data: String, $id: ID, $viewType: String) {
    onDeleteComponent(data: $data, id: $id, viewType: $viewType) {
      color
      data
      id
      viewType
    }
  }
`;
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob($owner: String!) {
    onDeleteJob(owner: $owner) {
      description
      id
      owner
      position
      rate
    }
  }
`;
export const onDeleteRootComponent = /* GraphQL */ `
  subscription OnDeleteRootComponent($id: ID, $viewType: String) {
    onDeleteRootComponent(id: $id, viewType: $viewType) {
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
export const onUpdateComponent = /* GraphQL */ `
  subscription OnUpdateComponent($data: String, $id: ID, $viewType: String) {
    onUpdateComponent(data: $data, id: $id, viewType: $viewType) {
      color
      data
      id
      viewType
    }
  }
`;
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob($owner: String!) {
    onUpdateJob(owner: $owner) {
      description
      id
      owner
      position
      rate
    }
  }
`;
export const onUpdateRootComponent = /* GraphQL */ `
  subscription OnUpdateRootComponent($id: ID, $viewType: String) {
    onUpdateRootComponent(id: $id, viewType: $viewType) {
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
