import Task from "./Task.jsx";

// eslint-disable-next-line react/prop-types
const TaskList = ({tasks, removeTask, doneTask}) => {

    return (
        <section>
            {/* eslint-disable-next-line react/prop-types */}
            <h3 className="font-bold font-serif text-xl mb-3">Task Lists (Total {tasks.length}, Done {tasks.filter((task)=> task.isDone).length})</h3>
            {/* eslint-disable-next-line react/prop-types */}
            {tasks.map((el) => (
                <Task doneTask={doneTask} removeTask={removeTask} key={el.id} job={el}/>
            ))}
        </section>
    )
}

export default TaskList;