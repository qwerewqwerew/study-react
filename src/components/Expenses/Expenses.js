import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const changeYearFn = (year) => {
    setFilteredYear(year);
  }
  const filterYearFn = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={changeYearFn} />
      <ExpenseChart items={filterYearFn}/>
      <ExpenseList items={filterYearFn} />
    </Card>
  )
}
export default Expenses;