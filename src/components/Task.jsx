// eslint-disable-next-line react/prop-types
const Task = ({job})=> {
    return (
        <div className="tasks border border-slate-300 p-2 w-1/3 rounded-lg mb-2 last:mb-0">
            <p>{job}</p>
        </div>
    )
}

export default Task;