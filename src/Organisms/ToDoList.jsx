import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDoItem from "../Moleclues/ToDoItem";
import { AnimatePresence } from "framer-motion";
import ToDoEdit from "./ToDoEdit";
import EmptyTask from "../Atoms/EmptyTask";

function ToDoList({
  task,
  setTask,
  isOpen,
  setIsOpen,
  isOpenHandler,
  taskDone,
  setTaskDone,
}) {
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

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current.contains(e.target)) {
        setSwitchEditModal(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
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
    setTaskDone(false);
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

  return (
    <div className="relative flex h-[75%] justify-center flex-column p-6">
      <ul
        ref={menuRef}
        className={
          isOpen || switchEditModal
            ? "w-svw list-none h-[400px] overflow-y-auto blur-[2px] transition-all"
            : "w-svw list-none h-[400px] overflow-y-auto"
        }
      >
        {task.length <= 0 ? (
          <EmptyTask />
        ) : (
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
                  taskDone={taskDone}
                  setTaskDone={setTaskDone}
                />
              );
            })}
          </AnimatePresence>
        )}
      </ul>
      <ToDoEdit
        values={editingTask}
        switchEditModal={switchEditModal}
        handleUpdateTask={handleUpdateTask}
        // menuRef={menuRef}
      />
      <ToDoForm
        addTask={addTask}
        isOpen={isOpen}
        emptyInput={emptyInput}
        setMainInputs={setMainInputs}
        mainInputs={mainInputs}
        // menuRef={menuRef}
      />
    </div>
  );
}

ToDoList.propTypes = {
  task: PropTypes.any,
  setTask: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func,
  isOpenHandler: PropTypes.func,
  taskDone: PropTypes.bool,
  setTaskDone: PropTypes.func,
};

export default ToDoList;
