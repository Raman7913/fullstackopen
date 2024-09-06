import { useState } from "react";

function Statistics(props) {
    return (
        <>
            <h1>statistics</h1>

            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.total}</p>
            <p>
                average{" "}
                {props.total > 0
                    ? (props.good * 1 + props.neutral * 0 + props.bad * -1) /
                      props.total
                    : 0}
            </p>
            <p>
                positive{" "}
                {`${props.total > 0 ? (props.good * 100) / props.total : 0}%`}
            </p>
        </>
    );
}
function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);

    return (
        <>
            <h1>give feedback</h1>
            <button
                onClick={() => {
                    setGood((prevGood) => prevGood + 1);
                    setTotal((prevTotal) => prevTotal + 1);
                }}
            >
                good
            </button>
            <button
                onClick={() => {
                    setNeutral((prevNeutral) => prevNeutral + 1);
                    setTotal((prevTotal) => prevTotal + 1);
                }}
            >
                neutral
            </button>
            <button
                onClick={() => {
                    setBad((prevBad) => prevBad + 1);
                    setTotal((prevTotal) => prevTotal + 1);
                }}
            >
                bad
            </button>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        </>
    );
}

export default App;
