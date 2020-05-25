import React from 'react';
import Balance from './components/Balance'
import './App.scss';
import InComeExpense from './components/InComeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState'

function App() {
  return ( 
  <GlobalProvider>
    <div className = "App">
      <div className = 'title'>收支记录 </div> 
      <Balance />
      <InComeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  </GlobalProvider>
  );
}

export default App;