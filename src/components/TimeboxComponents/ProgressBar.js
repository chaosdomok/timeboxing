function ProgressBar({className= "", percent = "50"}) {
    return (
        <div className={`ProgressBar ${className}`}>
            <div style={{width: `${percent}%`}}></div>
        </div>
    )
}

export default ProgressBar