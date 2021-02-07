const RiskScaleButton = ({ level }) => {
    return(
        <button key={level} className="risk-scale-button">
            {level}
        </button>
    )
}

export default RiskScaleButton;