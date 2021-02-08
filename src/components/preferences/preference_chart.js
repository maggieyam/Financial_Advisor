import { PieChart } from 'react-minimal-pie-chart';
import './preferences.css';
import '../../resize.css';

const DonutChart = (props) => {
    let data = [];
    const values = Object.values(props.preference)
    
    const color = ['#FF6666', '#FFFF66', '#0099FF', '#99FF99', '#9966FF'];
    values.shift();
    values.map((value, idx) => {
        if (value !== 0) {
            data.push({
                value: value,
                color: color[idx]
            })
        }
    })

    return(
        <>
        <PieChart            
            data={data}
            label={({dataEntry}) => `${dataEntry.value}%`}
            labelPosition={65}
            lineWidth={75}
            paddingAngle={0}
            radius={40}
            viewBoxSize={[100, 100]}
        />
        </>
    )
}



export default DonutChart;