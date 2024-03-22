import PropTypes from "prop-types";
import { motion } from "framer-motion";
import InputForm from "../Atoms/InputForm";
import { useEffect, useState } from "react";

function ToDoEdit({ values, switchEditModal, handleUpdateTask }) {
  const [editededTask, setEditedTask] = useState(values);
  useEffect(() => {
    setEditedTask(values)
  }, [values])

  function onUpdateTask() {
    handleUpdateTask(editededTask);
  }
  function handleChangeValue(event) {
    setEditedTask({ ...editededTask, value: event.target.value });
  }
  function handleChangeDate(event) {
    setEditedTask({ ...editededTask, date: event.target.value });
  }

  return (
    <>
      {switchEditModal && (
        <motion.div
          className="absolute w-svw h-[150px] gradient p-4 bottom-14"
          initial={{ y: "100%" }}
          animate={{ y: switchEditModal ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center flex-col p-5 bg-gradientBg text-white rounded-xl">
            <InputForm
              // isEmpty={emptyInput.emptyValue}
              handleChange={handleChangeValue}
              inputValue={values.value}
              isEmpty={false}
            />
            <InputForm
              // isEmpty={emptyInput.emptyDate}
              handleChange={handleChangeDate}
              inputValue={values.date}
              inputType={"date"}
              isEmpty={false}
            />
            <button
              className="bg-white text-lg text-black w-3/5 up mx-auto rounded-xl p-3 border-2 border-purple-900"
              onClick={onUpdateTask}
            >
              Edit task
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

ToDoEdit.propTypes = {
  switchEditModal: PropTypes.bool,
  values: PropTypes.object,
  handleUpdateTask: PropTypes.func,
};

export default ToDoEdit;
