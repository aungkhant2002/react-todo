import Heading from "./components/Heading.jsx";
import CreateTask from "./components/CreateTask.jsx";
import TaskList from "./components/TaskList.jsx";
import {useState} from "react";

const App = () => {
    const [tasks, setTask] = useState([
            {"id": 1, "task": "Complete project report", "isDone": false},
            {"id": 2, "task": "Review pull requests", "isDone": false},
            {"id": 3, "task": "Update documentation", "isDone": true},
            {"id": 4, "task": "Attend team meeting", "isDone": false},
            {"id": 5, "task": "Fix UI bugs", "isDone": true}
        ]
    )

    const addNewTask = (newTask) => {
        setTask([...tasks, newTask]);
    }

    const removeTask = (id) => {
        setTask(tasks.filter((task) => task.id !== id));
    }

    const doneTask = (id) => {
        setTask(tasks.map((task) => task.id === id ? {...task, isDone: !task.isDone} : task));
    }

    return (
        <section className="app p-10">
            <Heading/>
            <CreateTask addNewTask={addNewTask}/>
            <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask}/>
        </section>
    )
}

export default App;