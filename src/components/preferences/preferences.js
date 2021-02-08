
import React from 'react';
import { Link } from 'react-router-dom';
import RiskScaleButton from './risk_scale_button';
import PreferenceTable from './preference_table';
import DonutChart from './preference_chart';
import './preferences.css';
import '../../resize.css';

class Preference extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            bonds: 0,
            largeCap: 0,
            midCap: 0,
            foreign: 0,
            smallCap: 0
        };
        this.update = this.update.bind(this);
    }   

    componentDidMount() {
        this.props.fetchPreferences();
    }

    updateRowColor(row, level) {
        if (level % 2 === 0) {
                row.style.backgroundColor = 'white';
        } else {
                row.style.backgroundColor = '#f9f9f9';
        }
    }

    update(id){
        const level = this.state.id;
        const { 
                bonds, 
                largeCap, 
                midCap, 
                foreign, 
                smallCap 
            } = this.props.preferences[id - 1];

        const btn = document.getElementById(`${id}`);
        const prevLevel = document.getElementById(`${level}`);
        const row = document.getElementById(`row-${id}`);
        const prevRow = document.getElementById(`row-${level}`);
        const continueBtn = document.getElementsByClassName('continue-btn');

        btn.style.backgroundColor = 'yellow';
        row.style.backgroundColor = 'yellow';
        continueBtn.disabled = false;

        if (prevLevel) prevLevel.style.backgroundColor = 'white';
        if (prevRow) this.updateRowColor(prevRow, level)

        this.setState({id, bonds, largeCap, midCap, foreign, smallCap});
    }

    render() {
        const { preferences } = this.props;
        const risk  = this.state.id;
        if (!preferences) return null;

        return(
            <div className="form-body">
                 <h3>Please Select A Risk Level For Your Investment Portfolio</h3>
                 <div>
                     <div className="risk-scale-label">
                         <label id="low">Low</label>
                         <label id="high">High</label>
                 </div>

                 <div className="btn-wrapper">
                    {preferences.map(preference => {
                        return(
                            <RiskScaleButton 
                                level={preference.id} 
                                update = {this.update}
                                key={preference.id}
                                />
                        )
                    })}

                    <Link to={`/calculator/${risk}`}>
                        {risk > 0 ? <button className="continue-btn">Continue</button> :
                        <button className="continue-btn" disabled>Continue</button>}
                        
                    </Link>
                 </div>

                 <div className="img_table_wrapper">
                    <PreferenceTable preferences={preferences}/>
                 </div>

                 <div className="chart">
                    <DonutChart preference={this.state}/>
                 </div>
             </div>           
         </div>
        )
    }

}
export default Preference;