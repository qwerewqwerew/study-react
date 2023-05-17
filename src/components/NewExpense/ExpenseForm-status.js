import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {

	const [userInput, setUserInput] = useState({ inputTitle: '', inputNum: '', inputDate: '' });

	//const [inputTitle, setInputTitle] = useState('');
	//const [inputNum, setInputNum] = useState('');
	//const [inputDate, setInputDate] = useState('');

	const titleChangeFn = (e) => {
		//setUserInput({ ...userInput, inputTitle: e.target.value })
		//console.log({ ...userInput })
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
	return (
		<div>
			<h1>지출내역입력</h1>
			<form>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>제목</label>
						<input type="text" onChange={titleChangeFn} />
					</div>
					<div className="new-expense__control">
						<label>금액</label>
						<input type="number" min="0" step="100" onChange={numChangeFn} />
					</div>
					<div className="new-expense__control">
						<label>날짜</label>
						<input type="date" min="1999-01-01" max="2030-12-31" onChange={dateChangeFn} />
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
