import React, {useRef, useState} from "react";

function App() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const [running, setRunning] = useState(false);
    let intervalReference = useRef(null);

    function handleStart() {
        if (running) {
            return;
        }

        setStartTime(Date.now());
        setNow(Date.now());
        setRunning(true);

        intervalReference.current = setInterval(() => {
            setNow(Date.now());
        }, 1);
    }

    function handleStop() {
        setRunning(false);
        clearInterval(intervalReference.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h1>Timer: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}

export default App;
