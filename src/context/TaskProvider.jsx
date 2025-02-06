import TaskContext from "./TaskContext.js";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const TaskProvider = ({children}) => {
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
    return(
        <TaskContext.Provider value={{tasks, addNewTask, removeTask, doneTask}}>{children}</TaskContext.Provider>
    )
}

export default TaskProvider;