
import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    };
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    };
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    };
    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date:new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
     };
        return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Title</label>
                <input onChange={titleChangeHandler} value={enteredTitle} type="text"/>
              </div>
              <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler}/>
              </div>
              <div className="new-expense__control">
                <label>Date</label>
                <input type="date"
                  value={enteredDate}
                  onChange={dateChangeHandler}
                  min='2022-01-01'
                  max='2025-12-31'
                  />
              </div>
            </div>
            <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;
