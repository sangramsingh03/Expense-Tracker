const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// POST /api/expenses → Add a new expense
router.post('/expenses', async (req, res) => {
  try {
    const { amount, category, date, description } = req.body;
    const newExpense = await Expense.create({ amount, category, date, description });
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add expense' });
  }
});

// GET /api/expenses → Retrieve all expenses or filter expenses
router.get('/expenses', async (req, res) => {
  try {
    const { category, date } = req.query;
    const filter = {};

    // Apply filters if query parameters are provided
    if (category) filter.category = category;
    if (date) filter.date = new Date(date);

    // Fetch expenses based on the filter
    const expenses = await Expense.find(filter);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch/filter expenses' });
  }
});

// GET /api/expenses/total?start=YYYY-MM-DD&end=YYYY-MM-DD → Get total expenses for a date range
router.get('/expenses/total', async (req, res) => {
  try {
    const { start, end } = req.query;
    const startDate = new Date(start);
    const endDate = new Date(end);

    const total = await Expense.aggregate([
      {
        $match: {
          date: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
        },
      },
    ]);

    const totalAmount = total.length > 0 ? total[0].totalAmount : 0;
    res.status(200).json({ totalAmount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate total expenses' });
  }
});

module.exports = router;
