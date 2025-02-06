import Task from "./Task.jsx";
import {useContext} from "react";
import TaskContext from "../context/TaskContext.js";

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    return (
        <section>
            <h3 className="font-bold font-serif text-xl mb-3">Task Lists (Total {tasks.length}, Done {tasks.filter((task)=> task.isDone).length})</h3>
            {tasks.map((el) => (
                <Task key={el.id} job={el}/>
            ))}
        </section>
    )
}

export default TaskList;