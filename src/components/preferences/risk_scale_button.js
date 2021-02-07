import './preferences.css';

const RiskScaleButton = (props) => {
    
    const { level, update } = props
    return(
        <button 
            key={level} 
            className="risk-scale-btn"
            id={level}
            onClick={() => update(level)}
        >
            {level}
        </button>
    )
}

export default RiskScaleButton;