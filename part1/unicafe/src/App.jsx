import { useState } from "react";

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <>
            <h1>give feedback</h1>
            <button
                onClick={() => {
                    setGood((prevGood) => prevGood + 1);
                }}
            >
                good
            </button>
            <button
                onClick={() => {
                    setNeutral((prevNeutral) => prevNeutral + 1);
                }}
            >
                neutral
            </button>
            <button
                onClick={() => {
                    setBad((prevBad) => prevBad + 1);
                }}
            >
                bad
            </button>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </>
    );
}

export default App;
