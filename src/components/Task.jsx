import Swal from 'sweetalert2'
import {useContext} from "react";
import TaskContext from "../context/TaskContext.js";
// eslint-disable-next-line react/prop-types
const Task = ({job: {id, task, isDone}}) => {
    const {removeTask, doneTask} = useContext(TaskContext);
    const handleRemoveTaskBtn = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
            removeTask(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    const handleOnChange = () => {
        doneTask(id);
    }
    return (
        <div
            className="tasks flex justify-between items-center border border-slate-300 p-2 w-full md:w-3/4 lg:w-1/3 rounded-lg mb-2 last:mb-0">
            <div className="flex items-center gap-3">
                <input type="checkbox" onChange={handleOnChange} checked={isDone} className="size-4"/>
                <p className={isDone ? 'line-through' : ''}>{task}</p>
            </div>
            <button onClick={handleRemoveTaskBtn}
                    className="border border-red-200 bg-red-200 text-red-500 px-2 py-1 text-sm rounded-lg">Delete
            </button>
        </div>
    )
}

export default Task;