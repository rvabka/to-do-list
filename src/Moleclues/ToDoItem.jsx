import { validityTime } from "../Helpers/helpers";
import PropTypes from "prop-types";
import { GoTrash } from "react-icons/go";
import { motion } from "framer-motion";
import { GoPencil } from "react-icons/go";

function ToDoItem({ id, text, date, deleteTask, onEdit }) {
  function handleEditClick() {
    onEdit({id: id, value: text, date: date });
  }

  return (
    <>
      <motion.li
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="flex justify-between items-center w-[97%] mx-auto p-4 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] font-bold text-lg mt-3"
      >
        <div className="TEXT w-1/2">
          <p className="text-2xl font-bold">{text}</p>
          <p className="text-base font-normal text-purple-700 mt-1">
            {validityTime(date)}
          </p>
        </div>
        <button className="EDIT p-3 border-2 rounded-full transition-colors hover:bg-gray-50">
          <GoPencil className="size-7" onClick={handleEditClick} />
        </button>
        <button
          className="DELETE p-3 border-2 rounded-full transition-colors hover:bg-gray-50"
          onClick={() => deleteTask(id)}
        >
          <GoTrash className="size-7" />
        </button>
      </motion.li>
    </>
  );
}

ToDoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  deleteTask: PropTypes.func,
  onEdit: PropTypes.func,
};

export default ToDoItem;
