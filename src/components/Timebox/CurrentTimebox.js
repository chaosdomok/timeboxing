import React from 'react';

import Clock from "../TimeboxComponents/Clock"; 
import ProgressBar from "../TimeboxComponents/ProgressBar"; 
import { getMinutesAndSecondsFromDurationInSeconds } from "../../lib/time"

class CurrentTimebox extends React.Component {
    constructor(props) {
        super(props);
        console.count("constructor")
        this.state = {
            isRunning: false,
            isPaused: false,
            pausesCount: 0,
            elapsedTimeInSeconds: 0
        }
        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
        this.togglePause = this.togglePause.bind(this)
        this.intervalId = null;
    }
    componentWillMount() {
        console.count("componentWillMount")
    }
    componentDidUpdate() {
        console.count("componentDidUpdate")
    }
    componentWillUnmount() {
        console.count("componentWillUnmount");
        this.stopTimer();
    }
    handleStart(event) {
        this.setState({
            isRunning: true
        })
        this.startTimer()
    }
    handleStop(event) { 
        this.setState({
            isRunning: false,
            isPaused: false,
            pausesCount: 0,
            elapsedTimeInSeconds: 0
        })
        this.stopTimer()
    }
    startTimer() {
        if (this.intervalId === null) {
            this.intervalId = window.setInterval(
                () => {
                    console.log("timer works")
                    this.setState(
                        (prevState) => ({ elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 0.1})
                    )
                },
                100
            )
        }
    }
    stopTimer() {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
    }
    togglePause() {
        this.setState(
            function(prevState) {
                console.count("setState")
                const isPaused = !prevState.isPaused
                if(isPaused) {
                    this.stopTimer();
                }
                else {
                    this.startTimer();
                }
                return {
                    isPaused,
                    pausesCount: isPaused ? prevState.pausesCount + 1 : prevState.pausesCount
                }
            }
        )
    }
    render() {
        console.count("render")
        const { isPaused, isRunning, pausesCount, elapsedTimeInSeconds } = this.state;
        const { title, totalTimeInMinutes, isEditable, onEdit } = this.props;
        const totalTimeInSeconds = totalTimeInMinutes * 60;
        const timeLeftInSeconds = Math.max(0, totalTimeInSeconds - elapsedTimeInSeconds);
        const [minutesLeft, secondsLeft] = getMinutesAndSecondsFromDurationInSeconds(timeLeftInSeconds); 
        let progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;
        progressInPercent = Math.min(100, Math.max(0, progressInPercent));
        return (
            <div className={`CurrentTimebox ${isEditable ? "inactive" : ""}`}>
                <h1>{title}</h1>
                <Clock minutes={minutesLeft} seconds={secondsLeft} className={isPaused ? "inactive" : ""}/>
                <ProgressBar 
                    percent={progressInPercent} 
                    className={isPaused ? "inactive" : ""}
                    color="red"
                    big/>
                <button onClick={onEdit} disabled={isEditable}>Edytuj</button>
                <button onClick={this.handleStart} disabled={isRunning}>Start</button>
                <button onClick={this.handleStop} disabled={!isRunning}>Stop</button>
                <button onClick={this.togglePause} disabled={!isRunning}>{isPaused ? "Wznów" : "Pauzuj"}</button>
                Liczba przerw: {pausesCount}
            </div>
        )
    }
}

export default CurrentTimebox