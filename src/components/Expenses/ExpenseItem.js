import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  //console.log(useState());
	let [title,setTitle] = useState(props.title);
	const clickFn = () => {
		console.log(title);
    setTitle("😺😺😺😺😺😺")
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
			<button onClick={clickFn}>내용변경</button>
		</Card>
	);
};
export default ExpenseItem;
