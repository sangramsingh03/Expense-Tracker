# Expense Tracker Application

The Expense Tracker is a full-stack web application that allows users to manage their expenses efficiently. Users can add, view, filter, and calculate total expenses within a specified date range. The application is built using **React.js** for the frontend and **Node.js with Express** for the backend, with **MongoDB** as the database.

---

## 📌 Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Setup Instructions](#setup-instructions)
   - Backend Setup
   - Frontend Setup
4. [API Endpoints](#api-endpoints)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)

---

## 🚀 Features
- **Add Expenses** : Add new expenses with details such as amount, category, date, and description.
- **View Expenses** : View a list of all recorded expenses.
- **Filter Expenses** : Filter expenses by category and/or date.
- **Calculate Total Expenses** : Calculate the total expenses for a given date range.
- **Responsive Design** : Clean and modern UI with responsive styling.

---

## 🛠 Tech Stack

### Frontend:
- React.js  
- Axios (for API calls)  
- CSS Modules (for scoped styling)

### Backend:
- Node.js  
- Express.js  
- MongoDB (with Mongoose ODM)

### Other Tools:
- CORS (for cross-origin requests)  
- dotenv (for environment variables)  
- Create React App (for frontend scaffolding)

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sangramsingh03/Expense-Tracker
   cd Expense-Tracker/backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**  
   Create a `.env` file in the backend folder with the following content:
   ```env
   MONGODB_URI=mongodb+srv://user:cUhCdZ2D9SnbDGH7@expensetracker.3ejfd.mongodb.net/?retryWrites=true&w=majority&appName=expenseTracker
   PORT=5000
   ```

4. **Start the Backend Server:**
   ```bash
   node app.js
   ```
   Or, if using **nodemon**:
   ```bash
   nodemon app.js
   ```

5. **Verify Backend:**  
   Open `http://localhost:5000/api/expenses` in your browser or use Postman to test the API.

### 🔹 Frontend Setup
1. **Navigate to the Frontend Folder:**
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Frontend Development Server:**
   ```bash
   npm start
   ```

4. **Verify Frontend:**  
   Open `http://localhost:3000` in your browser to access the app.

---

## 📡 API Endpoints

| Method | Endpoint            | Description                           |
|--------|---------------------|---------------------------------------|
| POST   | `/api/expenses`     | Add a new expense                    |
| GET    | `/api/expenses`     | Retrieve all expenses or filter by query |
| GET    | `/api/expenses/total` | Calculate total expenses for a date range |

---

## 📌 Usage

### ✅ Add an Expense
1. Navigate to the **"Add Expense"** section.
2. Fill in the form with details like **amount, category, date, and description**.
3. Click **"Add Expense"** to save the record.

### ✅ View Expenses
- All recorded expenses are displayed in the **"Expense List"** section.

### ✅ Filter Expenses
- Use the **"Filter Expenses"** form to filter expenses by **category** and/or **date**.

### ✅ Calculate Total Expenses
- Use the **"Total Expenses"** section to calculate the total expenses for a specific date range.

---

## 📂 Folder Structure

### 🔹 Backend
```
backend/
├── models/
│   └── Expense.js          # Mongoose schema for expenses
├── routes/
│   └── expenseRoutes.js    # API routes for expenses
├── .env                    # Environment variables
├── app.js                  # Main server file
└── package.json            # Backend dependencies
```

### 🔹 Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── AddExpense.js         # Add Expense component
│   │   ├── ExpenseList.js        # Expense List component
│   │   ├── FilterExpenses.js     # Filter Expenses component
│   │   ├── TotalExpenses.js      # Total Expenses component
│   │   └── *.module.css          # Scoped CSS files
│   ├── App.js                    # Main App component
│   ├── index.js                  # Entry point for React app
│   └── App.module.css            # Global styles
├── package.json                  # Frontend dependencies
└── README.md                     # Project documentation
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. **Fork** the repository.
2. **Create a new branch**:  
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Commit your changes**:  
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:  
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Open a pull request**.

---

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
