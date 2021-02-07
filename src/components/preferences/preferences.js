
import React from 'react';
import { Link } from 'react-router-dom';
import RiskScaleButton from './risk_scale_button';
import PreferenceTable from './preference_table';
import logo from './donut_chart.png';

class Preference extends React.Component {
     constructor(props){
        super(props);
    }   
    
    componentDidMount() {
        this.props.fetchPreferences();
    }

    render() {
        const { preferences } = this.props;
        if (!preferences) return null;
        const url = "https://conceptdraw.com/a3039c3/p1/preview/640/pict--1-sector-donut-chart-management-indicators---vector-stencils-library.png--diagram-flowchart-example.png"
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
                            <RiskScaleButton level={preference.id} />
                        )
                    })}
                    <button className="continue-btn">Continue</button>
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