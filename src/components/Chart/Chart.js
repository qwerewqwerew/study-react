import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = (props) => {
  console.log("🎈🎈", props);
  const dataPointValues = props.dataPoints.map((data) => data.value)
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      Chart
      {props.dataPoints.map((dataPoint) => { return (<ChartBar value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} key={dataPoint.label} />) })}
    </div>
  )
}
export default Chart;