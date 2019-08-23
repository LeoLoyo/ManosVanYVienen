import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import AppRoot from '../App'

import client from './client'

export default () => (
  <ApolloProvider client={client}>
    <AppRoot />
  </ApolloProvider>
);