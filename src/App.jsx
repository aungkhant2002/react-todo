import Heading from "./components/Heading.jsx";
import CreateTask from "./components/CreateTask.jsx";
import TaskList from "./components/TaskList.jsx";

const App = ()=> {
    return (
        <section className="app p-10">
            <Heading />
            <CreateTask />
            <TaskList />
        </section>
    )
}

export default App;