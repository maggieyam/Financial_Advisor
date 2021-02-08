const PortfolioTable = ({state, update, titles}) => {
    const headers = [
                    'Portfolio', 
                    'Current Amount', 
                    'Difference', 
                    'New Amount'
                    ]
 
    const { difference, newAmount } = state;
    return(
        <table>
            <thead>
                <tr>
                    {headers.map(header => 
                        <th>{header}</th>
                    )}
                </tr>
            </thead>

            <tbody>
                {titles.map((title, idx) => {
                    return(
                        <tr key={idx}>
                            <td>{title}</td>
                            {createInput(e => update(idx, e))}                           
                            {difference[idx] >= 0 ? 
                                createDisabledInput(difference[idx], true, 'green') : 
                                createDisabledInput(difference[idx], true, 'red')
                            }
                            {createDisabledInput(newAmount[idx], false, 'blue')}
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
                />
        </td>
    )
}

const createInput = (callBack) => {
    return(
        <td>
            <input 
                type='text' 
                onChange={callBack}/>
        </td>
    )
}

const  getValue = (value, sign) => {
        if (!value && value !== 0) {
            return null;
        } else if (value > 0 && sign) {
            return `+${value}`;
        } else {
            return value;
        }
    }

export default PortfolioTable;