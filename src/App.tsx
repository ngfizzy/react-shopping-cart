

import React from 'react';
import { GlobalLayout } from './core';

import './App.css';
import { LuminNav } from './core/components/lumin-nav/lumin-nav';
import { Products } from './components/products';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apollo-client';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalLayout>
        <LuminNav />
        <Products />
      </GlobalLayout>
    </ApolloProvider>

  );
}

export default App;