import React from 'react';
import ExpenseMain from './ExpenseMain'
import {ContextProvider} from './transContext'
import './App.css';

function App() {
  return (
    <ContextProvider>
      <ExpenseMain />
    </ContextProvider>
    
  );
}

export default App;
