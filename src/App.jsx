import { useState } from "react";
import Header from "./Organisms/Header";
import ToDoList from "./Organisms/ToDoList";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState([]);
  const userName = "John";

  function isOpenHandler() {
    setIsOpen((prev) => !prev);
  } // włączanie Form z dodawanie taska

  return (
    <div className="h-svh w-svw bg-custom-bg text-custom-text">
      <Header isOpenHandler={isOpenHandler} userName={userName} />
      <ToDoList
        task={task}
        setTask={setTask}
        isOpen={isOpen}
        isOpenHandler={isOpenHandler}
      />
    </div>
  );
}

export default App;
