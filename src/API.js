/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateComponentInput = {|
  data: string,
  viewType: string,
|};

export type ModelJobConditionInput = {|
  and?: ?Array< ?ModelJobConditionInput >,
  description?: ?ModelStringInput,
  not?: ?ModelJobConditionInput,
  or?: ?Array< ?ModelJobConditionInput >,
  position?: ?ModelStringInput,
  rate?: ?ModelIntInput,
|};

export type ModelStringInput = {|
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  beginsWith?: ?string,
  between?: ?Array< ?string >,
  contains?: ?string,
  eq?: ?string,
  ge?: ?string,
  gt?: ?string,
  le?: ?string,
  lt?: ?string,
  ne?: ?string,
  notContains?: ?string,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "_null" |
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet";


export type ModelSizeInput = {|
  between?: ?Array< ?number >,
  eq?: ?number,
  ge?: ?number,
  gt?: ?number,
  le?: ?number,
  lt?: ?number,
  ne?: ?number,
|};

export type ModelIntInput = {|
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  between?: ?Array< ?number >,
  eq?: ?number,
  ge?: ?number,
  gt?: ?number,
  le?: ?number,
  lt?: ?number,
  ne?: ?number,
|};

export type CreateJobInput = {|
  description: string,
  id?: ?string,
  owner?: ?string,
  position: string,
  rate: number,
|};

export type CreateRootComponentInput = {|
  viewType: string,
|};

export type DeleteComponentInput = {|
  id: string,
|};

export type DeleteJobInput = {|
  id?: ?string,
|};

export type DeleteRootComponentInput = {|
  id: string,
|};

export type UpdateComponentInput = {|
  data?: ?string,
  id: string,
  viewType?: ?string,
|};

export type UpdateJobInput = {|
  description?: ?string,
  id: string,
  owner?: ?string,
  position?: ?string,
  rate?: ?number,
|};

export type UpdateRootComponentInput = {|
  id: string,
  viewType?: ?string,
|};

export type TableComponentFilterInput = {|
  data?: ?TableStringFilterInput,
  id?: ?TableIDFilterInput,
  viewType?: ?TableStringFilterInput,
|};

export type TableStringFilterInput = {|
  beginsWith?: ?string,
  between?: ?Array< ?string >,
  contains?: ?string,
  eq?: ?string,
  ge?: ?string,
  gt?: ?string,
  le?: ?string,
  lt?: ?string,
  ne?: ?string,
  notContains?: ?string,
|};

export type TableIDFilterInput = {|
  beginsWith?: ?string,
  between?: ?Array< ?string >,
  contains?: ?string,
  eq?: ?string,
  ge?: ?string,
  gt?: ?string,
  le?: ?string,
  lt?: ?string,
  ne?: ?string,
  notContains?: ?string,
|};

export type ModelJobFilterInput = {|
  and?: ?Array< ?ModelJobFilterInput >,
  description?: ?ModelStringInput,
  id?: ?ModelIDInput,
  not?: ?ModelJobFilterInput,
  or?: ?Array< ?ModelJobFilterInput >,
  owner?: ?ModelStringInput,
  position?: ?ModelStringInput,
  rate?: ?ModelIntInput,
|};

export type ModelIDInput = {|
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  beginsWith?: ?string,
  between?: ?Array< ?string >,
  contains?: ?string,
  eq?: ?string,
  ge?: ?string,
  gt?: ?string,
  le?: ?string,
  lt?: ?string,
  ne?: ?string,
  notContains?: ?string,
  size?: ?ModelSizeInput,
|};

export type TableRootComponentFilterInput = {|
  id?: ?TableIDFilterInput,
  viewType?: ?TableStringFilterInput,
|};

export type CreateComponentMutationVariables = {|
  input: CreateComponentInput,
|};

export type CreateComponentMutation = {|
  createComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type CreateJobMutationVariables = {|
  condition?: ?ModelJobConditionInput,
  input: CreateJobInput,
|};

export type CreateJobMutation = {|
  createJob: ? {|
    __typename: "Job",
    description: string,
    id: string,
    owner: ?string,
    position: string,
    rate: number,
  |},
|};

export type CreateRootComponentMutationVariables = {|
  input: CreateRootComponentInput,
|};

export type CreateRootComponentMutation = {|
  createRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type DeleteComponentMutationVariables = {|
  input: DeleteComponentInput,
|};

export type DeleteComponentMutation = {|
  deleteComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type DeleteJobMutationVariables = {|
  condition?: ?ModelJobConditionInput,
  input: DeleteJobInput,
|};

export type DeleteJobMutation = {|
  deleteJob: ? {|
    __typename: "Job",
    description: string,
    id: string,
    owner: ?string,
    position: string,
    rate: number,
  |},
|};

export type DeleteRootComponentMutationVariables = {|
  input: DeleteRootComponentInput,
|};

export type DeleteRootComponentMutation = {|
  deleteRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type UpdateComponentMutationVariables = {|
  input: UpdateComponentInput,
|};

export type UpdateComponentMutation = {|
  updateComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type UpdateJobMutationVariables = {|
  condition?: ?ModelJobConditionInput,
  input: UpdateJobInput,
|};

export type UpdateJobMutation = {|
  updateJob: ? {|
    __typename: "Job",
    description: string,
    id: string,
    owner: ?string,
    position: string,
    rate: number,
  |},
|};

export type UpdateRootComponentMutationVariables = {|
  input: UpdateRootComponentInput,
|};

export type UpdateRootComponentMutation = {|
  updateRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type GetComponentQueryVariables = {|
  id: string,
|};

export type GetComponentQuery = {|
  getComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type GetJobQueryVariables = {|
  id: string,
|};

export type GetJobQuery = {|
  getJob: ? {|
    __typename: "Job",
    description: string,
    id: string,
    owner: ?string,
    position: string,
    rate: number,
  |},
|};

export type GetRootComponentQueryVariables = {|
  id: string,
|};

export type GetRootComponentQuery = {|
  getRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type ListComponentsQueryVariables = {|
  filter?: ?TableComponentFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListComponentsQuery = {|
  listComponents: ? {|
    __typename: "ComponentConnection",
    items: ? Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    nextToken: ?string,
  |},
|};

export type ListJobsQueryVariables = {|
  filter?: ?ModelJobFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListJobsQuery = {|
  listJobs: ? {|
    __typename: "ModelJobConnection",
    items: ? Array<? {|
      __typename: "Job",
      description: string,
      id: string,
      owner: ?string,
      position: string,
      rate: number,
    |} >,
    nextToken: ?string,
  |},
|};

export type ListRootComponentsQueryVariables = {|
  filter?: ?TableRootComponentFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListRootComponentsQuery = {|
  listRootComponents: ? {|
    __typename: "RootComponentConnection",
    items: ? Array<? {|
      __typename: "RootComponent",
      color: ?string,
      components:  Array<? {|
        __typename: "Component",
        color: ?string,
        data: string,
        id: string,
        viewType: string,
      |} >,
      id: string,
      viewType: string,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateComponentSubscriptionVariables = {|
  data?: ?string,
  id?: ?string,
  viewType?: ?string,
|};

export type OnCreateComponentSubscription = {|
  onCreateComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type OnCreateJobSubscriptionVariables = {|
  owner: string,
|};

export type OnCreateJobSubscription = {|
  onCreateJob: ? {|
    __typename: "Job",
    description: string,
    id: string,
    owner: ?string,
    position: string,
    rate: number,
  |},
|};

export type OnCreateRootComponentSubscriptionVariables = {|
  id?: ?string,
  viewType?: ?string,
|};

export type OnCreateRootComponentSubscription = {|
  onCreateRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type OnDeleteComponentSubscriptionVariables = {|
  data?: ?string,
  id?: ?string,
  viewType?: ?string,
|};

export type OnDeleteComponentSubscription = {|
  onDeleteComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type OnDeleteJobSubscriptionVariables = {|
  owner: string,
|};

export type OnDeleteJobSubscription = {|
  onDeleteJob: ? {|
    __typename: "Job",
    description: string,
    id: string,
    owner: ?string,
    position: string,
    rate: number,
  |},
|};

export type OnDeleteRootComponentSubscriptionVariables = {|
  id?: ?string,
  viewType?: ?string,
|};

export type OnDeleteRootComponentSubscription = {|
  onDeleteRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};

export type OnUpdateComponentSubscriptionVariables = {|
  data?: ?string,
  id?: ?string,
  viewType?: ?string,
|};

export type OnUpdateComponentSubscription = {|
  onUpdateComponent: ? {|
    __typename: "Component",
    color: ?string,
    data: string,
    id: string,
    viewType: string,
  |},
|};

export type OnUpdateJobSubscriptionVariables = {|
  owner: string,
|};

export type OnUpdateJobSubscription = {|
  onUpdateJob: ? {|
    __typename: "Job",
    description: string,
    id: string,
    owner: ?string,
    position: string,
    rate: number,
  |},
|};

export type OnUpdateRootComponentSubscriptionVariables = {|
  id?: ?string,
  viewType?: ?string,
|};

export type OnUpdateRootComponentSubscription = {|
  onUpdateRootComponent: ? {|
    __typename: "RootComponent",
    color: ?string,
    components:  Array<? {|
      __typename: "Component",
      color: ?string,
      data: string,
      id: string,
      viewType: string,
    |} >,
    id: string,
    viewType: string,
  |},
|};