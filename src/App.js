import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  //1. 매개변수를 받는 함수를 만든다
  //2. 하위컴포넌트의 props 로 함수를 넣는다
  const addExpenseFn = (data) => { 
    console.log("App 🎃🎃",data);
   }

  const expense = [
    { id: 'e1', title: '화장지', amount: 9100, date: new Date(2019, 7, 14) },
    { id: 'e2', title: '모니터', amount: 129100, date: new Date(2020, 12, 14) },
    { id: 'e3', title: '자동차보험', amount: 294000, date: new Date(2021, 3, 14) },
    { id: 'e4', title: '밥상', amount: 4500, date: new Date(2023, 5, 5) }
  ]
  return (
    <div className="App">
      <h1>가계부</h1>
      <NewExpense onAddExpense={addExpenseFn} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
