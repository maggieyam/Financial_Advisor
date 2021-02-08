import React from 'react';
import PreferenceTable from '../preferences/preference_table';
import ProfolioForm from './portfolio_form';
class Portfolio extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            bonds: 0,
            largeCap:0,
            midCap:0,
            foreign: 0,
            smallCap: 0
        };
    }   

    componentDidMount() {
        this.props.fetchPreference(this.props.match.params.level);
    }

    render() {
        const { preference } = this.props;
        if (!preference) return null;
        const values = Object.values(preference);
        return (
            <div>
                <h2>Personal Portfolio</h2>
                <h2>Risk Level {preference.id}</h2>
                <PreferenceTable preferences={[values]}/>
                <ProfolioForm preference={values.slice(1)}/>
            </div>

        )
    }
}

export default Portfolio;