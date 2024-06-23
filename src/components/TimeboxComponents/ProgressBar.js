function ProgressBar({className= "", percent = "50"}) {
    return (
        <div className={`progress progress--big progress--color-red ${className}`}>
            <div className="progress__bar" style={{width: `${percent}%`}}></div>
        </div>
    )
}

export default ProgressBar