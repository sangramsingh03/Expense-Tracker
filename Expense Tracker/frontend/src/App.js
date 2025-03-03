import React from 'react';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';
import styles from './App.module.css';
import FilterExpenses from './components/FilterExpenses';

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Expense Tracker</h1>
      <AddExpense />
      <ExpenseList />
      <FilterExpenses />
      <TotalExpenses />
    </div>
  );
};

export default App;
