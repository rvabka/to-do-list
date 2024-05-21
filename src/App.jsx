import { useState } from "react";
import Header from "./Organisms/Header";
import ToDoList from "./Organisms/ToDoList";
import Footer from "./Organisms/Footer";
import { useNavigate, Routes, Route } from "react-router-dom";
import Stats from "./Organisms/Stats";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState([]);
  const [taskDone, setTaskDone] = useState(false);
  const userName = "John";
  const Navigate = useNavigate();

  function isOpenHandler() {
    setIsOpen((prev) => !prev);
    Navigate("/");
  } // włączanie Form z dodawanie taska
  
  console.log(task)

  return (
    <div className="w-screen h-svh bg-custom-bg text-custom-text">
      <Header isOpenHandler={isOpenHandler} userName={userName} />
      <Routes>
        <Route
          path="/"
          element={
            <ToDoList
              task={task}
              setTask={setTask}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isOpenHandler={isOpenHandler}
              taskDone={taskDone}
              setTaskDone={setTaskDone}
            />
          }
        />
        <Route path="/statistics" element={<Stats taskArray={task} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
