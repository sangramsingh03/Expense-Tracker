import React, { useState } from 'react';
import axios from 'axios';
import styles from './TotalExpenses.module.css';

const TotalExpenses = () => {
  const [total, setTotal] = useState(0);
  const [dates, setDates] = useState({ start: '', end: '' });

  const handleChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/expenses/total?start=${dates.start}&end=${dates.end}`);
      setTotal(response.data.totalAmount);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Total Expenses</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="date"
          name="start"
          value={dates.start}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="date"
          name="end"
          value={dates.end}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Calculate Total</button>
      </form>
      <h3 className={styles.total}>Total Expenses: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default TotalExpenses;
