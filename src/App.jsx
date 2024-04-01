import { useState } from "react";
import Header from "./Organisms/Header";
import ToDoList from "./Organisms/ToDoList";
import Footer from "./Organisms/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState([]);
  const [taskDone, setTaskDone] = useState(false);
  const userName = "John";

  function isOpenHandler() {
    setIsOpen((prev) => !prev);
  } // włączanie Form z dodawanie taska

  return (
    <div className="w-screen h-svh bg-custom-bg text-custom-text">
      <Header isOpenHandler={isOpenHandler} userName={userName} />
      <ToDoList
        task={task}
        setTask={setTask}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isOpenHandler={isOpenHandler}
        taskDone={taskDone}
        setTaskDone={setTaskDone}
      />
      <Footer />
    </div>
  );
}

export default App;
