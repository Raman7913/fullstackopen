const Header = (props) => {
    const { name } = props;
    return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </>
    );
};

const Part = (props) => {
    return (
        <>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </>
    );
};
const Course = (props) => {
    const { id, name, parts } = props.course;
    return (
        <>
            <Header name={name} />
            <Content parts={parts} />
        </>
    );
};

const App = () => {
    const course = {
        id: 1,
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3,
            },
        ],
    };

    return <Course course={course} />;
};

export default App;
