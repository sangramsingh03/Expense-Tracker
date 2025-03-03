import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddExpense.module.css';

const AddExpense = () => {
  const [expense, setExpense] = useState({ amount: '', category: '', date: '', description: '' });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/expenses', expense);
      alert('Expense added successfully!');
      setExpense({ amount: '', category: '', date: '', description: '' }); // Reset form
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expense.amount}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={expense.category}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={expense.description}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
