import Heading from "./components/Heading.jsx";
import CreateTask from "./components/CreateTask.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskProvider from "./context/TaskProvider.jsx";

const App = () => {


    return (
        // <TaskProvider>
            <section className="app p-10">
                <Heading/>
                <CreateTask/>
                <TaskList/>
            </section>
        // </TaskProvider>
    )
}

export default App;