import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  console.log(props);
  const chartDataPoints = [
    { label: "1월", value: 0 },
    { label: "2월", value: 0 },
    { label: "3월", value: 0 },
    { label: "4월", value: 0 },
    { label: "5월", value: 0 },
    { label: "6월", value: 0 },
    { label: "7월", value: 0 },
    { label: "8월", value: 0 },
    { label: "9월", value: 0 },
    { label: "10월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 },
  ]
  for (const item of props.items) {
    //0~11
    const month = item.date.getMonth();
    chartDataPoints[month].value+=item.amount;
  }

  return (
    <Chart dataPoints={chartDataPoints} />
  )
}
export default ExpenseChart;