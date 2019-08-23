import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';

import client from './client';
import AppRoutes from '../navigations';

export default App => (
  <ApolloProvider client={client}>
    <AppRoutes />
  </ApolloProvider>
);
