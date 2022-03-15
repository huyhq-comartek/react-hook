import { useRef, useState } from 'react';
import './style.scss'

function UseRef() {
    const [count, setCount] = useState(60);

    let timerId = useRef(0);

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(preCount => preCount -1)
        }, 1000);

        console.log(timerId);
    }

    const handleStop = () => {
        clearInterval(timerId.current);

        console.log(timerId);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default UseRef;