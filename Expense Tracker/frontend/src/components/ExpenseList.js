import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ExpenseList.module.css';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('/api/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Expense List</h2>
      <ul className={styles.list}>
        {expenses.map((expense) => (
          <li key={expense._id} className={styles.item}>
            <span>{expense.amount} - {expense.category}</span>
            <span>{new Date(expense.date).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
