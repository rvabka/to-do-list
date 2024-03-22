import { useState } from "react";
import PropTypes from "prop-types";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDoItem from "../Moleclues/ToDoItem";
import { AnimatePresence } from "framer-motion";
import ToDoEdit from "./ToDoEdit";

function ToDoList({ task, setTask, isOpen, isOpenHandler }) {
  const [switchEditModal, setSwitchEditModal] = useState(false);
  const [mainInputs, setMainInputs] = useState({
    value: "",
    date: "",
  });
  const [editingTask, setEditingTask] = useState({
    value: "",
    date: "",
  });
  const [emptyInput, setEmptyInput] = useState({
    emptyValue: false,
    emptyDate: false,
  });

  function checkInputs() {
    const updatedIsEmptyInput = {
      emptyValue: mainInputs.value === "",
      emptyDate: mainInputs.date === "",
    };
    setEmptyInput(updatedIsEmptyInput);
  }

  function addTask() {
    checkInputs();
    if (mainInputs.value && mainInputs.date != "") {
      const newItem = {
        id: uuidv4(),
        text: mainInputs.value,
        date: mainInputs.date,
      };
      setTask((prevTasks) => [...prevTasks, newItem]);
      isOpenHandler();
      setMainInputs({ value: "", date: "" });
    }
  }

  function isEditHandler(task) {
    setSwitchEditModal((prev) => !prev);
    isOpen ? setSwitchEditModal(false) : null;
    setEditingTask(task);
  }

  function deleteTask(clickedTask) {
    setTask(task.filter((el) => el.id !== clickedTask));
    setSwitchEditModal(false);
  }

  function handleUpdateTask(updateTask) {
    setTask((prevTask) =>
      prevTask.map((task) => {
        if (task.id === updateTask.id) {
          return {
            ...task,
            text: updateTask.value,
            date: updateTask.date,
          };
        }
        return task;
      })
    );
    setSwitchEditModal(false);
  }
  console.log(task)



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
                onEdit={isEditHandler}
              />
            );
          })}
        </AnimatePresence>
      </ul>
      <ToDoEdit
        values={editingTask}
        switchEditModal={switchEditModal}
        handleUpdateTask={handleUpdateTask}
      />
      <ToDoForm
        addTask={addTask}
        isOpen={isOpen}
        emptyInput={emptyInput}
        setMainInputs={setMainInputs}
        mainInputs={mainInputs}
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
