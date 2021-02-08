import './preferences.css';
import '../../resize.css';

const PreferenceTable = ({preferences}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th id="risk">Risk</th>
                    <th className="bonds">Bonds %</th>
                    <th className="lg">Large Cap %</th>
                    <th className="mid">Mid Cap %</th>
                    <th className="foreign">Foreign %</th>
                    <th className="sm">Small Cap %</th>
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