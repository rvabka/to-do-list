import { useState } from "react";
import PropTypes from "prop-types";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDoItem from "../Moleclues/ToDoItem";
import { AnimatePresence } from "framer-motion";

function ToDoList({ task, setTask, isOpen, isOpenHandler }) {
  const [input, setInput] = useState({
    value: "",
    date: "",
  });
  const [emptyInput, setEmptyInput] = useState({
    emptyValue: false,
    emptyDate: false,
  });

  function checkInputs() {
    const updatedIsEmptyInput = {
      emptyValue: input.value === "",
      emptyDate: input.date === "",
    };
    setEmptyInput(updatedIsEmptyInput);
  }

  function addTask() {
    checkInputs();
    if (input.value && input.date != "") {
      const newItem = { id: uuidv4(), text: input.value, date: input.date };
      setTask((prevTasks) => [...prevTasks, newItem]);
      isOpenHandler();
      setInput({ value: "", date: "" });
    }
  }

  function deleteTask(clickedTask) {
    setTask(task.filter((el) => el.id !== clickedTask));
  }
  console.log(task);

  return (
    <div className="relative w-full h-[650px] flex justify-center flex-column p-5">
      <ul className="w-svw list-none h-[400px] overflow-y-auto">
        <AnimatePresence mode="sync">
          {task.map(({ id, text, date }) => {
            return (
              <ToDoItem
                key={id}
                id={id}
                text={text}
                date={date}
                deleteTask={deleteTask}
              />
            );
          })}
        </AnimatePresence>
      </ul>
      <ToDoForm
        setInput={setInput}
        input={input}
        addTask={addTask}
        isOpen={isOpen}
        emptyInput={emptyInput}
      />
    </div>
  );
}

ToDoList.propTypes = {
  task: PropTypes.any,
  setTask: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  isOpenHandler: PropTypes.func,
};

export default ToDoList;
