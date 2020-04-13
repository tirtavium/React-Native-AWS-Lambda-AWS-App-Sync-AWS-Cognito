import gql from 'graphql-tag';
import { Auth } from 'aws-amplify'
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsconfig from '../aws-exports';

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    jwtToken: Auth.currentSession().getIdToken(),
  }
});
export { client }