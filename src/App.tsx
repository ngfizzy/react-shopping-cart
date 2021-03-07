

import React from 'react';
import { GlobalLayout } from './core';

import './App.css';
import { LuminNav } from './core/components/lumin-nav/lumin-nav';
import { Products } from './components/products';

function App() {
  return (
    <GlobalLayout>
      <LuminNav />
      <Products
      
      />
    </GlobalLayout>
  );
}

export default App;