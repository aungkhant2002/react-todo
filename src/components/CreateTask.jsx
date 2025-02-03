const CreateTask = ()=> {
    return (
        <section className="create-task flex mb-3 w-1/3">
            <input type="text" className="border border-slate-300 focus:outline-0 rounded-l-lg p-2 w-full"/>
            <button className="border border-slate-300 bg-slate-300 rounded-r-lg font-bold px-4 py-2">Add</button>
        </section>
    )
}

export default CreateTask;