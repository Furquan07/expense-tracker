//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import ExpenseItem from './ExpenseItem.js';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

const DUMMY_EXPENSE =[
  {
    id:'e1',
    title:'toilet paper',
    amount:190,
    date: new Date(2020, 5, 26),
  },
  {
    id:'e2',
    title:'pen',
    amount:110,
    date: new Date(2019, 5, 23),
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  function addExpenseHandler(expense){
    setExpenses((preExpenses)=>{
      return [expense, ...preExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
