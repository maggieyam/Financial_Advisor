import './preferences.css';
import '../../resize.css';

const PreferenceTable = ({preferences}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th id="risk">Risk</th>
                    <th>Bonds %</th>
                    <th>Large Cap %</th>
                    <th>Mid Cap %</th>
                    <th>Foreign %</th>
                    <th>Small Cap %</th>
                </tr>
            </thead>
            <tbody>
                {preferences.map((level, idx) => {
                    return(
                        <tr 
                            className={idx % 2 === 0 ? "row-grey" : null} 
                            id={`row-${idx + 1}`}
                            key={idx}
                            >
                            {Object.values(level).map((item, idx) => {
                                return(
                                    <td id={idx === 0 ? "risk": null} key={idx}>
                                        {item}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
                
        </table>
    )
}

export default PreferenceTable;