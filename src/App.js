import './App.css';
import { useState } from "react"
import { Expenses } from "./components/Expense/Expenses"
import { NewExpense } from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([])
  // note: figured out that this is the correct way to update state
  const AddExpense = newExpense => setExpenses(prevState => [newExpense, ...prevState])

  return (
    <div className="App">
      <header>
        <h1>Mo's Expenses</h1>
      </header>
      <NewExpense onAddNewExpense={AddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

