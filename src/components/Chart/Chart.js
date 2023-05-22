import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = (props) => {
  return (
    <div>
      Chart
      {props.dataPoints.map((dataPoint) => { return (<ChartBar value={dataPoint.value} maxValue={null} label={dataPoint.label} key={dataPoint.label} />) })}
    </div>
  )
}
export default Chart;