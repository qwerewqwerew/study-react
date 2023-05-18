import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Accordion from "./components/Accordion";

const INIT_DATA = [
  { id: 'e1', title: '화장지', amount: 9100, date: new Date(2019, 7, 14) },
  { id: 'e2', title: '모니터', amount: 129100, date: new Date(2020, 12, 14) },
  { id: 'e3', title: '자동차보험', amount: 294000, date: new Date(2021, 3, 14) },
  { id: 'e4', title: '밥상', amount: 4500, date: new Date(2023, 5, 5) }
]

function App() {
  const [expenseList,setExpenseList]=useState(INIT_DATA);

  const addExpenseFn = (data) => {
    console.log("App 🎃🎃", data);
    setExpenseList(()=>{});
  }

  return (
    <div className="App">
      <h1>가계부</h1>
      <NewExpense onAddExpense={addExpenseFn} />
      <Expenses items={expenseList} />
    </div>
  );
}

export default App;
