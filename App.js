/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react'
import {StatusBar} from 'react-native'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import AppNavigator from './AppNavigator'
import { Localei18n } from './components'
import { withAuthenticator, Authenticator } from 'aws-amplify-react-native'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Localei18n />
    <AppNavigator />
  </>
)
export default App