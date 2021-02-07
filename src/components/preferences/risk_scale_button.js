import './preferences.css';

const RiskScaleButton = ({ level }) => {
    return(
        <button key={level} className="risk-scale-btn">
            {level}
        </button>
    )
}

export default RiskScaleButton;