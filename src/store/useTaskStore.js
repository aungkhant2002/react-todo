import {create} from "zustand";

const useTaskStore = create((set) => ({
    tasks: [
        {"id": 1, "task": "Complete project report", "isDone": false},
        {"id": 2, "task": "Review pull requests", "isDone": false},
        {"id": 3, "task": "Update documentation", "isDone": true},
        {"id": 4, "task": "Attend team meeting", "isDone": false},
        {"id": 5, "task": "Fix UI bugs", "isDone": true}
    ],
    addTask: (newTask) => set((state)=>({tasks: [...state.tasks, newTask]})),
    removeTask: (taskId) => set((state) => ({tasks: state.tasks.filter((task) => task.id !== taskId)})),
    doneTask: (taskId) => set((state)=>({tasks: state.tasks.map(task => task.id === taskId ? {...task, isDone: !task.isDone} : task)})),
}))

export default useTaskStore;