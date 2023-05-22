import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {

	const [userInput, setUserInput] = useState({ inputTitle: '', inputNum: '', inputDate: '' });

	const titleChangeFn = (e) => {
		setUserInput((prev) => {
			console.log("titleChangeFn", userInput);
			return ({ ...prev, inputTitle: e.target.value });
		})
	};
	const numChangeFn = (e) => {
		console.log('numChangeFn', userInput);
		setUserInput((prev) => { return ({ ...prev, inputNum: e.target.value }) })
	}
	const dateChangeFn = (e) => {
		console.log('dateChangeFn', userInput);
		setUserInput((prev) => { return ({ ...prev, inputDate: e.target.value }) });
	}
	const submitFn = (e) => {
		e.preventDefault();

		setUserInput({ inputTitle: '', inputNum: '', inputDate: "" })
	}
	return (
		<div>
			<h1>지출내역입력</h1>
			<form onSubmit={submitFn}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>제목</label>
						<input type="text" onChange={titleChangeFn} value={userInput.inputTitle} />
					</div>
					<div className="new-expense__control">
						<label>금액</label>
						<input type="number" min="0" step="100" onChange={numChangeFn} value={userInput.inputNum} />
					</div>
					<div className="new-expense__control">
						<label>날짜</label>
						<input type="date" min="1999-01-01" max="2030-12-31" onChange={dateChangeFn} value={userInput.inputDate} />
					</div>
				</div>
				<div className="new-expense__action">
					<button type="submit">등록하기</button>
				</div>
			</form>
		</div>
	);
};
export default ExpenseForm;
