
import React from 'react';
import { Link } from 'react-router-dom';
import RiskScaleButton from './risk_scale_button';
import PreferenceTable from './preference_table';
import logo from './donut_chart.png';

class Preference extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            level: 0
        };
        this.update = this.update.bind(this);
    }   

    updateRowColor(row, level) {
        if (level % 2 === 0) {
                row.style.backgroundColor = 'white';
        } else {
                row.style.backgroundColor = '#f9f9f9';
        }
    }

    update(id){
        const level = this.state.level;
        const btn = document.getElementById(`${id}`);
        const prevLevel = document.getElementById(`${level}`);
        const row = document.getElementById(`row-${id}`);
        const prevRow = document.getElementById(`row-${level}`);

        btn.style.backgroundColor = 'yellow';
        row.style.backgroundColor = 'yellow';

        if (prevLevel) prevLevel.style.backgroundColor = 'white';
        if (prevRow) this.updateRowColor(prevRow, level)
            
        this.setState({level: id});
    }

    componentDidMount() {
        this.props.fetchPreferences();
    }

    render() {
        const { preferences } = this.props;
        if (!preferences) return null;
        
        return(
            <div className="form-body">
                 <h3>Please Select A Risk Level For Your Investment Portfolio</h3>
                 <div>
                     <div className="risk-scale-label">
                         <label id="low">Low</label>
                         <label id="high">High</label>
                 </div>
                 <ul>
                    {preferences.map(preference => {
                        return(
                            <RiskScaleButton 
                                level={preference.id} 
                                update = {this.update}
                                />
                        )
                    })}
                    <Link to="/">
                        <button className="continue-btn">Continue</button>
                    </Link>
                 </ul>
                 <div className="img_table_wrapper">
                    <PreferenceTable preferences={preferences}/>
                    <img src={logo} id="logo"/>
                 </div>
             </div>           
         </div>
        )
    }

}
export default Preference;