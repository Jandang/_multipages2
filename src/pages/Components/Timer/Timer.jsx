import { useState, useEffect } from 'react';

import './Timer.css';

function Timer() {
    const [running, setRunning] = useState(false)
    const [seconds, setSeconds] = useState(0)

    function runClick() {
        setRunning(!running);
    }

    function resetClick() {
        setRunning(false);
        setSeconds(0);
    }

    function secondsTostring(seconds) {
        const MINUTE_SECONDS = 60;
        const HOUR_SECONDS = MINUTE_SECONDS * 60;
        const DAY_SECONDS = HOUR_SECONDS * 24;

        const days = Math.floor(seconds / DAY_SECONDS);
        const hours = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS);
        const minutes = Math.floor((seconds % HOUR_SECONDS) / MINUTE_SECONDS);
        const secs = seconds % MINUTE_SECONDS;

        if (days > 0) {
            return `${days}d ${hours}h ${minutes}m ${secs}s`;
        } else if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`;
        } else {
            return `${secs}s`;
        }
    }

    useEffect(() => {
        let interval = null;
        if (running) {
            interval = setInterval(() => {
                setSeconds(seconds + 1)
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [running, seconds])

    return ( 
        <div className="timer-container">
            <h2 className="timer-title">TIMER</h2>
            <p><input className='timer-display' type="text"
            readOnly={true} value={secondsTostring(seconds)} /></p>
            <div className='time-buttons'>
                <button className='btn btn-danger bi bi-arrow-clockwise'
                onClick={resetClick}>Reset</button>
                <button className={'btn ' + (running ? 'btn-warning bi bi-pause' : 'btn-success bi bi-play')} 
                onClick={runClick}>{running ? 'Pause' : 'Run'}</button>
            </div>
        </div>
     );
}

export default Timer;