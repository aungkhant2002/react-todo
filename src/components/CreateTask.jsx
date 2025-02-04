import {useState} from "react";

// eslint-disable-next-line react/prop-types
const CreateTask = ({addNewTask})=> {

    const [job, setJob] = useState("");
    const handleOnChange = (event)=> {
        setJob(event.target.value)
    }

    const handleAddTaskBtn = () => {
        const newTask = {
            id: Date.now(),
            task: job,
            isDone: false
        }
        addNewTask(newTask);
        setJob("");
    }

    return (
        <section className="create-task flex mb-3 w-1/3">
            <input type="text" value={job} placeholder="Write your new task" onChange={handleOnChange} className="border border-slate-300 focus:outline-0 rounded-l-lg p-2 flex-grow"/>
            <button onClick={handleAddTaskBtn} className="border border-slate-300 bg-slate-300 rounded-r-lg px-4 py-2">Add Task</button>
        </section>
    )
}

export default CreateTask;