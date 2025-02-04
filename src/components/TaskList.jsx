import Task from "./Task.jsx";

// eslint-disable-next-line react/prop-types
const TaskList = ({tasks}) => {

    return (
        <section>
            {/* eslint-disable-next-line react/prop-types */}
            <h3 className="font-bold font-serif text-xl mb-3">Task Lists (Total {tasks.length}, Done {0})</h3>
            {/* eslint-disable-next-line react/prop-types */}
            {tasks.map((el) => (
                <Task key={el} job={el}/>
            ))}
        </section>
    )
}

export default TaskList;