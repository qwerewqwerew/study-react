import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {
  const titleChangeFn=(e)=>{
    console.log(e.target.value);
  }
	return (
		<div>
      <h1>사용자가 입력한 제목을 여기에 출력하기</h1>
			<form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>제목</label>
            <input type="text" onChange={titleChangeFn} />
          </div>
          <div className="new-expense__control">
            <label>금액</label>
            <input type="number" min="0" step="100" />
          </div>
          <div className="new-expense__control">
            <label>날짜</label>
            <input type="date" min="1999-01-01" max="2030-12-31" />
          </div>
        </div>
        <div className="new-expense__action"><button type="submit">등록하기</button></div>
      </form>
		</div>
	);
};
export default ExpenseForm;
