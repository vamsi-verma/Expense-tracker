import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "books",
    amount: 1500,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 50000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 20000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 2000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expensesData, setExpensesData] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpensesData((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
};

export default App;
