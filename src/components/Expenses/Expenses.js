import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const changeYearFn = (year) => {
    setFilteredYear(year);
  }
  const filterFn = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;

  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={changeYearFn} />
      {filterFn.map((item) => {
        return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      })}
      {/* <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date} />
      <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date} />
      <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date} />
      <ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date} /> */}
    </Card>
  )
}
export default Expenses;