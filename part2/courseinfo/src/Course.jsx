export default function Course({ course }) {
    return (
        <div key={course.id}>
            <h2>{course.name}</h2>
            {course.parts.map((part) => (
                <p key={part.id}>{`${part.name} ${part.exercises}`}</p>
            ))}
            <h3>
                total of{" "}
                {course.parts.reduce((sum, part) => {
                    return part.exercises + sum;
                }, 0)}{" "}
                exercises
            </h3>
        </div>
    );
}
