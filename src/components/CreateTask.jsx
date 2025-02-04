import {useState} from "react";

// eslint-disable-next-line react/prop-types
const CreateTask = ({addNewTask})=> {

    const [job, setJob] = useState("");
    const handleOnChange = (event)=> {
        setJob(event.target.value)
    }

    const handleAddTaskBtn = () => {
        addNewTask(job);
        setJob("");
    }

    return (
        <section className="create-task flex mb-3 lg:w-1/3">
            <input type="text" value={job} placeholder="Write your new task" onChange={handleOnChange} className="border border-slate-300 focus:outline-0 rounded-l-lg p-2 w-full"/>
            <button onClick={handleAddTaskBtn} className="border border-slate-300 bg-slate-300 rounded-r-lg font-bold px-4 py-2">Add</button>
        </section>
    )
}

export default CreateTask;