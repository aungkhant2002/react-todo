// eslint-disable-next-line react/prop-types
const Task = ({job : {id, task, isDone}, removeTask})=> {
    const handleRemoveTaskBtn = () => {
        if (confirm("Are you sure you want to remove this task?")) {
            removeTask(id);
        }
    }
    return (
        <div className="tasks flex justify-between items-center border border-slate-300 p-2 w-1/3 rounded-lg mb-2 last:mb-0">
            <p>{task}</p>
            <button onClick={handleRemoveTaskBtn} className="border border-red-200 bg-red-200 text-red-500 px-2 py-1 text-sm rounded-lg">Delete</button>
        </div>
    )
}

export default Task;