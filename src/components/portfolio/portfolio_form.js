import React from 'react';
import './portfolio.css';
import '../../resize.css';
import PortfolioTable from './portfoilo_table';
import { calculateTotalAmount, 
         calculateNewPortfolio, 
         calculateDiff,
         calculateRec
        } from '../../util/calculator_util';

class PortfolioForm extends React.Component {
    constructor() {
        super();
        this.state = {
            currentAmount: [NaN, NaN, NaN, NaN, NaN],
            difference: [],
            newAmount: [],
            recommendations: {}
        }
    }

    handleSubmit(e) {        
        e.preventDefault();
        const { currentAmount } = this.state;
        const totalAmount = calculateTotalAmount(currentAmount);
        const newAmount = calculateNewPortfolio(this.props.preference, totalAmount);
        const difference = calculateDiff(currentAmount, newAmount);
        const recommendations = calculateRec(difference);
        this.setState({newAmount, difference, recommendations});
    }

    update(idx, e) {
        e.preventDefault();
        const num = e.currentTarget.value;
        const currentAmount = this.state.currentAmount.slice();
        
        if (num.match(/[^$,.\d]/)) {
            alert('error');
            currentAmount[idx] = NaN;
        } else {
            currentAmount[idx] = parseInt(num);
        }
        this.setState({currentAmount: currentAmount})
    }

    enableSubmitBtn() {
        
        return(
            <button id="rebalance-btn">Rebalance</button>
        )
    }

    disableSubmitBtn() {
        return(
            <button id="rebalance-btn" disabled>Rebalance</button> 
        )
    }

    renderRecommendations(indices, titles) {
        return indices.map(index => {
            const outflow = titles[index];
            const inflows = this.state.recommendations[index];
            return inflows.map((asset,idx) => {
                let index = Object.keys(asset)[0];

                const inflowTitle = titles[index];
                const amount = asset[index];
                
                return(
                    <li key={idx} className="recommendation-text">
                        Transfer ${amount.toFixed(2)} from {outflow} to {inflowTitle}.
                    </li>
                )
            })
        })
    }

    render(){
        const titles = [
            'Bonds', 
            'Large Cap', 
            'Mid Cap', 
            'Foreign', 
            'Small Cap'
            ];
        
        const { currentAmount, recommendations } = this.state;
        const  values = Object.values(currentAmount);
        const indices = Object.keys(recommendations);

        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} className="portfolio-form">
                    <header className="portfolio-header">
                        <h2>Please select your portfolio</h2>
                        {values.includes(NaN) ? 
                        this.disableSubmitBtn() : 
                        this.enableSubmitBtn() }                       
                    </header>
                    <PortfolioTable 
                        state={this.state} 
                        update={this.update.bind(this)}
                        titles={titles}
                        />
                    <div>
                        <h2 className="recommendation">Recommendations</h2>
                        <ul>
                            {indices.length ? this.renderRecommendations(indices, titles) : null}                                          
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}

export default PortfolioForm;