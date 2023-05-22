import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  console.log(props);
  const selectYearFn = (e) => {
    props.onChangeYear(e.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control"><label>연도별</label>
        <select value={props.selected} onChange={selectYearFn}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="1800">1800</option>
        </select>
      </div>
    </div>
  )
}
export default ExpensesFilter;

