import React, { useState } from 'react';
import axios from 'axios';
import styles from './FilterExpenses.module.css';

const FilterExpenses = () => {
  const [filters, setFilters] = useState({ category: '', date: '' });
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/expenses', { params: filters });
      setFilteredExpenses(response.data);
    } catch (error) {
      console.error('Error filtering expenses:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Filter Expenses</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Food)"
          value={filters.category}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Filter</button>
      </form>

      <h3>Filtered Expenses</h3>
      <ul className={styles.list}>
        {filteredExpenses.map((expense) => (
          <li key={expense._id} className={styles.item}>
            <span>{expense.amount} - {expense.category}</span>
            <span>{new Date(expense.date).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterExpenses;
