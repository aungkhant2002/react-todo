import Heading from "./components/Heading.jsx";
import CreateTask from "./components/CreateTask.jsx";
import TaskList from "./components/TaskList.jsx";
import {useState} from "react";

const App = ()=> {
    const [tasks, setTask] = useState([
        "Complete project report",
        "Review pull requests",
        "Update documentation",
        "Attend team meeting",
        "Fix UI bugs"
    ])

    const addNewTask = (newTask) => {
        setTask([...tasks, newTask]);
    }

    return (
        <section className="app p-10">
            <Heading />
            <CreateTask addNewTask = {addNewTask} />
            <TaskList tasks={tasks}/>
        </section>
    )
}

export default App;