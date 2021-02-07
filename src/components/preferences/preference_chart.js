import { getByLabelText } from '@testing-library/react';
import { PieChart } from 'react-minimal-pie-chart';

const DonutChart = (props) => {
    let data = [];
    const values = Object.values(props.preference)
    const color = ['red', 'yellow', 'blue', 'green', 'purple'];
    values.pop();
    values.map((value, idx) => {
        if (value !== 0) {
            data.push({
                value: value,
                color: color[idx]
            })
        }
    })
    debugger
    return(
        <>
        <PieChart            
            data={data}
            label={({dataEntry}) => `${dataEntry.value}%`}
            labelPosition={65}
            lineWidth={75}
            paddingAngle={0}
            radius={50}
            viewBoxSize={[100, 100]}
        />
        </>
    )
}



export default DonutChart;