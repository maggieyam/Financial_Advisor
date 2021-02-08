import './portfolio.css';
import '../../resize.css';

const PortfolioTable = ({state, update, titles}) => {
    const headers = [
                    'Portfolio', 
                    'Current Amount', 
                    'Difference', 
                    'New Amount'
                    ]
 
    const { difference, newAmount } = state;
    return(
        <table className="portfolio-table">
            <thead className="portfolio-thead">
                <tr>
                    {headers.map((header, idx) => 
                        <th className="header" key={idx}>{header}</th>
                    )}
                </tr>
            </thead>

            <tbody className="portfolio-tbody">
                {titles.map((title, idx) => {
                    return(
                        <tr key={idx}>
                            <td >{title}</td>
                            {createInput(e => update(idx, e))}                           
                            {difference[idx] >= 0 ? 
                                createDisabledInput(difference[idx], true, 'green inputs') : 
                                createDisabledInput(difference[idx], true, 'red inputs')
                            }
                            {createDisabledInput(newAmount[idx], false, 'blue inputs')}
                        </tr>                             
                    )
                })}
            </tbody>
        </table>
    )
}

const createDisabledInput = (value, sign, className) => {
    return(
        <td>
            <input 
                value={getValue(value, sign)} 
                className={className} 
                disabled              
                />
        </td>
    )
}

const createInput = (callBack) => {
    return(
        <td>
            <input 
                type='text' 
                className="inputs"
                onChange={callBack}/>
        </td>
    )
}

const  getValue = (value, sign) => {
        if (!value && value !== 0) {
            return null;
        } else if (value > 0 && sign) {
            return `+${value.toFixed(2)}`;
        } else {
            return value.toFixed(2);
        }
    }

export default PortfolioTable;