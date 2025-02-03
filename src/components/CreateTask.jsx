const CreateTask = ()=> {
    return (
        <section className="create-task flex">
            <input type="text" className="border-slate-200 focus:outline-0 bg-slate-200 rounded-l-lg p-2"/>
            <button className="border-slate-300 bg-slate-300 rounded-r-lg font-bold p-2">Add</button>
        </section>
    )
}

export default CreateTask;