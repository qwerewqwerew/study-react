import Expenses from "./components/Expenses";
function App() {
  const expense = [
    { id: 'e1', title: '화장지', amount: 9100, date: new Date(2022, 7, 14) },
    { id: 'e2', title: '모니터', amount: 129100, date: new Date(2022, 12, 14) },
    { id: 'e3', title: '자동차보험', amount: 294000, date: new Date(2023, 3, 14) },
    { id: 'e4', title: '밥상', amount: 4500, date: new Date(2023, 5, 5) }
  ]
  return (
    <div className="App">
      <h1>가계부</h1>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
