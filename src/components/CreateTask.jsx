import {useState} from "react";
import useTaskStore from "../store/useTaskStore.js";

const CreateTask = ()=> {
    const {addTask} = useTaskStore();
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
        addTask(newTask);
        setJob("");
    }

    return (
        <section className="create-task flex mb-3 w-full md:w-3/4 xl:w-1/3">
            <input type="text" value={job} placeholder="Write your new task" onChange={handleOnChange} className="border border-slate-300 text-black focus:outline-0 rounded-l-lg p-2 flex-grow"/>
            <button onClick={handleAddTaskBtn} className="border border-slate-200 bg-slate-200 rounded-r-lg px-4 py-2">Add Task</button>
        </section>
    )
}

export default CreateTask;