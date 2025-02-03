import Task from "./Task.jsx";

const TaskList = () => {
    const tasks = [
        "Complete project report",
        "Review pull requests",
        "Update documentation",
        "Attend team meeting",
        "Fix UI bugs"
    ]
    return (
        <section>
            <h3 className="font-bold font-serif text-xl mb-3">Task Lists (Total {tasks.length}, Done {0})</h3>
            {tasks.map((el) => (
                <Task key={el} job={el}/>
            ))}
        </section>
    )
}

export default TaskList;