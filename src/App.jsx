import Heading from "./components/Heading.jsx";
import CreateTask from "./components/CreateTask.jsx";

const App = ()=> {
    return (
        <section className="app p-10">
            <Heading />
            <CreateTask />
        </section>
    )
}

export default App;