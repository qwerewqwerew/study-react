import "./ExpenseDate.css";
const ExpenseDate = (props) => {
	const year = props.date.getFullYear();
	const month = props.date.getMonth().toString().padStart(2,"0");
  console.log(typeof month.toString());
	const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
	return (
		<div className="expense-date">
			<div className="expense-date__year">{year}년</div>
			<div className="expense-date__month">{month == 0 ? "12" : month}월</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
};
export default ExpenseDate;
