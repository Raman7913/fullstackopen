import { useState } from "react";

function StatisticsLine(props) {
    return (
        <>
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
        </>
    );
}

function Statistics(props) {
    if (props.total > 0) {
        return (
            <>
                <h1>statistics</h1>
                <table border="1">
                    <tbody>
                        <StatisticsLine text="good" value={props.good} />
                        <StatisticsLine text="neutral" value={props.neutral} />
                        <StatisticsLine text="bad" value={props.bad} />
                        <StatisticsLine text="total" value={props.total} />
                        <StatisticsLine
                            text="average"
                            value={
                                props.total > 0
                                    ? (props.good * 1 +
                                          props.neutral * 0 +
                                          props.bad * -1) /
                                      props.total
                                    : 0
                            }
                        />
                        <StatisticsLine
                            text="positive"
                            value={`${
                                props.total > 0
                                    ? (props.good * 100) / props.total
                                    : 0
                            }%`}
                        />
                    </tbody>
                </table>
            </>
        );
    }
    return (
        <>
            <p>No feedback given</p>
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
