import { useState, useCallback } from "react";
import { validityTime } from "../Helpers/helpers";
import PropTypes from "prop-types";
import { GoTrash } from "react-icons/go";
import { motion } from "framer-motion";
import { GoPencil } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";

function ToDoItem({
  id,
  text,
  date,
  finished,
  deleteTask,
  onEdit,
  handleFinishedTask,
  setTaskDone,
}) {
  const [dropdown, setDropdown] = useState(false);

  function handleEditClick() {
    onEdit({ id: id, value: text, date: date });
  }

  function toggleDropdown() {
    setDropdown((prev) => !prev);
  }

  const handleTaskDone = useCallback(() => {
    setTaskDone(prevTaskDone => {
      const newTaskDone = !prevTaskDone;
      handleFinishedTask({ id: id, finished: newTaskDone, value: text, date: date });
      return newTaskDone;
    });
  }, [setTaskDone, handleFinishedTask, id, text, date]);
  
  return (
    <>
      <motion.li
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="flex justify-between items-center bg-custom-2bg w-full mx-auto p-4 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] font-bold text-lg mt-3"
      >
        <div className="TEXT w-1/2">
          <p
            className={
              !finished
                ? "text-xl font-bold transition-all duration-400"
                : "text-xl font-thin line-through italic text-gray-500 transition-all duration-400"
            }
          >
            {text}
          </p>
          <p className="text-base font-normal text-purple-700 mt-1 transition-all duration-400">
            {!finished ? validityTime(date) : "Task done"}
          </p>
        </div>
        <motion.button
          className="p-3 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ rotate: 90 }}
          transition={{ duration: 0.2 }}
          onClick={toggleDropdown}
        >
          {dropdown ? (
            <FaAngleUp className="size-7" />
          ) : (
            <FaAngleDown className="size-7" />
          )}
        </motion.button>
      </motion.li>
      {dropdown && (
        <motion.div
          className="flex items-center justify-between h-auto w-full bg-custom-2bg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="DONE p-3 border-2 rounded-full transition-colors hover:bg-green-500"
            onClick={handleTaskDone}
          >
            {finished ? (
              <MdDoneAll className="size-7" />
            ) : (
              <MdDone className="size-7" />
            )}
          </button>
          <button
            className="EDIT  p-3 border-2 rounded-full transition-colors hover:bg-custom-purple"
            onClick={handleEditClick}
          >
            <GoPencil className="size-7" />
          </button>
          <button
            className="DELETE p-3 border-2 rounded-full transition-colors hover:bg-red-500"
            onClick={() => deleteTask(id)}
          >
            <GoTrash className="size-7" />
          </button>
        </motion.div>
      )}
    </>
  );
}

ToDoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  finished: PropTypes.bool,
  deleteTask: PropTypes.func,
  onEdit: PropTypes.func,
  handleFinishedTask: PropTypes.func,
  taskDone: PropTypes.bool,
  setTaskDone: PropTypes.func,
};

export default ToDoItem;
