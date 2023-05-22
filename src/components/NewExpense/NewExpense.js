import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
	const [isEdit, setIsEdit] = useState(false)
	const editingFn = () => { setIsEdit(true) }
	const editingCancelFn = () => { setIsEdit(false) }
	const saveExpenseFn = (data) => {
		const expenseData = { ...data, id: Math.random().toString() }
		props.onAddExpense(expenseData)
	}
	return (
		<div className="new-expense">
			{!isEdit && <button onClick={editingFn}>추가하기</button>}
			{isEdit && <ExpenseForm onSaveExpense={saveExpenseFn} onCancel={editingCancelFn} />}
		</div>
	);
};
export default NewExpense;
